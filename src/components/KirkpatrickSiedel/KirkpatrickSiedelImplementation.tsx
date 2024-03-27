const KirkpatrickSiedelImplementation = `#include <iostream>
#include <vector>
#include <algorithm>
#include <set>
#include <utility>
#include <climits>
#include <chrono>
using namespace std;

typedef pair<double, double> Point;

static bool compareX(const pair<double, double> &a, const pair<double, double> &b)
{
    return a.first < b.first;
}

int partition(std::vector<double> &nums, double left, double right, double pivotIndex)
{
    double pivotValue = nums[pivotIndex];
    std::swap(nums[pivotIndex], nums[right]); // Move pivot to end
    double storeIndex = left;
    for (double i = left; i < right; i++)
    {
        if (nums[i] < pivotValue)
        {
            std::swap(nums[i], nums[storeIndex]);
            storeIndex++;
        }
    }
    std::swap(nums[storeIndex], nums[right]); // Move pivot to its final place
    return storeIndex;
}

double quickselect(std::vector<double> &nums, double left, double right, double k)
{
    if (left == right)
    {
        return nums[left];
    }

    double pivotIndex = left + (right - left) / 2;
    pivotIndex = partition(nums, left, right, pivotIndex);

    if (k == pivotIndex)
    {
        return nums[k];
    }
    else if (k < pivotIndex)
    {
        return quickselect(nums, left, pivotIndex - 1, k);
    }
    else
    {
        return quickselect(nums, pivotIndex + 1, right, k);
    }
}

double findMedian(std::vector<double> &nums)
{
    if (nums.empty())
    {
        throw std::domain_error("Cannot find median of an empty vector.");
    }

    int n = nums.size();
    double mid = n / 2;
    double median = quickselect(nums, 0, n - 1, mid);

    // If the size is even, we need to find the average of the two middle numbers
    if (n % 2 == 0)
    {
        double lowerMedian = quickselect(nums, 0, mid - 1, mid - 1);
        median = (median + lowerMedian) / 2.0;
    }

    return median;
}

pair<vector<pair<double, double>>, vector<int>> findMinMaxX(vector<pair<double, double>> &points)
{
    vector<pair<double, double>> res;
    int minIndex = 0, maxIndex = 0;
    double puminx = points[0].first;
    double puminy = points[0].second;
    double pumaxx = points[0].first;
    double pumaxy = points[0].second;

    for (double i = 1; i < points.size(); i++)
    {
        if (points[i].first < puminx || points[i].first == puminx && points[i].second > puminy)
        {
            puminx = points[i].first;
            puminy = points[i].second;
            minIndex = i;
        }
        if (points[i].first > pumaxx || points[i].first == pumaxx && points[i].second > pumaxy)
        {
            pumaxx = points[i].first;
            pumaxy = points[i].second;
            maxIndex = i;
        }
    }
    res.push_back({puminx, puminy});
    res.push_back({pumaxx, pumaxy});
    vector<int> indices;
    indices.push_back(minIndex);
    indices.push_back(maxIndex);
    return {res, indices};
}

double slope(pair<double, double> &a, pair<double, double> &b)
{
    return (double)(b.second - a.second) / (double)(b.first - a.first);
}

pair<pair<double, double>, pair<double, double>> UpperBridge(vector<pair<double, double>> &points, double a)
{
    vector<pair<double, double>> candidates;
    double n = points.size();
    if (points.size() == 2)
    {
        if (points[0].first < points[1].first)
            return {points[0], points[1]}; // Join the points in red
        else
            return {points[1], points[0]}; // Join the points in red
    }
    vector<pair<pair<double, double>, pair<double, double>>> pairs;
    vector<double> K;
    double i = 0;
    if (points.size() % 2 == 1)
    {
        candidates.push_back(points[0]);
        i++;
    }
    for (; i <= n - 2; i += 2)
    {
        double x1 = points[i].first;
        double x2 = points[i + 1].first;

        if (x1 <= x2)
        {
            pairs.push_back({points[i], points[i + 1]}); // Draw line
        }
        else
        {
            pairs.push_back({points[i + 1], points[i]}); // Draw line
        }
    }

    for (i = 0; i < pairs.size(); i++)
    {
        pair<double, double> p1 = pairs[i].first;
        pair<double, double> p2 = pairs[i].second;

        if (p1.first == p2.first)
        {
            if (p1.second > p2.second)
            {
                candidates.push_back(p1); // Remove edge between p1,p2 and the point p2
            }
            else
            {
                candidates.push_back(p2); // Remove edge between p1,p2 and the point p1
            }
        }
        else
        {
            K.push_back((double)(p1.second - p2.second) / (p1.first - p2.first));
        }
    }

    double medianK = findMedian(K);

    // cout<<"Hello"<<endl;
    vector<pair<pair<double, double>, pair<double, double>>> smaller, equal, larger;

    for (i = 0; i < pairs.size(); i++)
    {
        pair<double, double> p1 = pairs[i].first;
        pair<double, double> p2 = pairs[i].second;

        double slopeVal = (double)(p1.second - p2.second) / (p1.first - p2.first);
        if (slopeVal < medianK)
        {
            smaller.push_back({p1, p2});
        }
        else if (slopeVal == medianK)
        {
            equal.push_back({p1, p2});
        }
        else
        {
            larger.push_back({p1, p2});
        }
    }

    double maximumIntercept = INT_MIN;

    for (auto point : points)
    {
        double y = point.second;
        double x = point.first;

        if (maximumIntercept < y - medianK * x)
        {
            maximumIntercept = y - medianK * x;
        }
    }

    pair<double, double> pk = {INT_MAX, INT_MAX};
    pair<double, double> pm = {INT_MIN, INT_MIN};

    for (auto point : points)
    {
        double y = point.second;
        double x = point.first;

        if (y - medianK * x == maximumIntercept)
        {
            if (x < pk.first)
            {
                pk = {x, y};
            }
            if (x > pm.first)
            {
                pm = {x, y};
            }
        }
    }

    // plot pk, pm supporting line in blue

    // Determine bridge

    if (pk.first <= a && pm.first > a)
    {
        // state 2
        return {pk, pm}; // Draw This edge red
    }

    // state 3
    if (pm.first <= a)
    {
        for (auto pair : larger)
        {

            candidates.push_back(pair.second); // remove the edge joining pair.first and pair.second and remove the point pair.first
        }
        for (auto pair : equal)
        {
            candidates.push_back(pair.second);
        }
        for (auto pair : smaller)
        {
            candidates.push_back(pair.second);
            candidates.push_back(pair.first); // No action
        }
    }

    if (pk.first > a)
    {
        for (auto pair : larger)
        {
            candidates.push_back(pair.second);
            candidates.push_back(pair.first); // no action
        }
        for (auto pair : equal)
        {
            candidates.push_back(pair.first); // remove the edge joining pair.first and pair.second and remove the point pair.second
        }
        for (auto pair : smaller)
        {
            candidates.push_back(pair.first); // remove the edge joining pair.first and pair.second and remove the point pair.second
        }
    }

    return UpperBridge(candidates, a);
}

int partition_pair(vector<pair<double, double>> &S, int left, int right)
{
    pair<double, double> pivotValue = S[right];
    int storeIndex = left;

    for (int i = left; i < right; i++)
    {
        if (S[i].first < pivotValue.first)
        {
            swap(S[i], S[storeIndex]);
            storeIndex++;
        }
    }

    swap(S[storeIndex], S[right]);
    return storeIndex;
}

pair<double, double> quickSelect_pair(vector<pair<double, double>> &S, int left, int right, int k)
{
    if (left == right)
        return S[left];

    int pivotIndex = partition_pair(S, left, right);

    if (k == pivotIndex)
        return S[k];
    else if (k < pivotIndex)
        return quickSelect_pair(S, left, pivotIndex - 1, k);
    else
        return quickSelect_pair(S, pivotIndex + 1, right, k);
}

void connect_U(pair<double, double> pk, pair<double, double> pm, vector<pair<double, double>> &S, vector<pair<pair<double, double>, pair<double, double>>> &edges)
{
    double medianX;
    int n = S.size();

    pair<double, double> medianPoint = quickSelect_pair(S, 0, n - 1, n / 2); // Find the median point

    medianX = medianPoint.first;

    // Show the median line
    cout << "Median line: x = " << medianX << endl;
    // sort(S.begin(),S.end(),compareX);
    // if (n % 2 == 0)  medianX = ((double)S[n / 2].first + S[n / 2 - 1].first) / 2;
    // else medianX = (double)S[n / 2].first; // X = medianX

    // //show the median line
    // cout << "Median line: x = " << medianX << endl;

    pair<pair<double, double>, pair<double, double>> ub = UpperBridge(S, medianX);

    pair<double, double> pi = ub.first;
    pair<double, double> pj = ub.second;

    edges.push_back(ub);

    vector<pair<double, double>> S_left, S_right;

    S_left.push_back(pi);
    S_right.push_back(pj);

    for (auto point : S)
    {
        if (point.first < pi.first)
        {
            S_left.push_back(point);
        }
        if (point.first > pj.first)
        {
            S_right.push_back(point);
        }
    }

    if (pi != pk)
    {
        connect_U(pk, pi, S_left, edges);
    }
    if (pj != pm)
    {
        connect_U(pj, pm, S_right, edges);
    }
}

void UpperHull(vector<pair<double, double>> &points, vector<pair<pair<double, double>, pair<double, double>>> &edges)
{
    int n = points.size();
    if (n == 2)
    {
        edges.push_back({points[0], points[1]}); // Draw the edge
        return;
    }

    pair<vector<pair<double, double>>, vector<int>> temp = findMinMaxX(points);

    pair<double, double> pmin = temp.first[0];
    pair<double, double> pmax = temp.first[1];

    int minIndex = temp.second[0];
    int maxIndex = temp.second[1];

    if (minIndex == maxIndex)
    {
        return;
    }

    vector<pair<double, double>> uhPoints;

    uhPoints.push_back(pmin);
    uhPoints.push_back(pmax);
    for (auto point : points)
    {
        if (point.first > pmin.first && point.first < pmax.first)
        {
            uhPoints.push_back(point);
        }
    }

    pair<double, double> medianPoint = quickSelect_pair(uhPoints, 0, uhPoints.size() - 1, uhPoints.size() / 2);
    double medianX = medianPoint.first;

    vector<pair<double, double>> uhPointsSorted = uhPoints;

    connect_U(pmin, pmax, uhPointsSorted, edges);
}

// upper code of upperhull is the updated one with use of quick select
//  void UpperHull(vector<pair<double,double> > &points,vector<pair<pair<double,double>,pair<double,double> > >& edges) {

//     int n = points.size();
//     if(n == 2) {
//         edges.push_back({points[0],points[1]}); // Draw the edge
//         return;
//     }

//     sort(points.begin(),points.end(),compareX);

//     pair<vector<pair<double,double>>,vector<int>> temp=findMinMaxX(points);

//     pair<double,double> pmin=temp.first[0];
//     pair<double,double> pmax=temp.first[1];

//     int minIndex=temp.second[0];
//     int maxIndex=temp.second[1];

//     if(minIndex==maxIndex){
//         return;
//     }

//     vector<pair<double,double>> uhPoints;

//     uhPoints.push_back(pmin);
//     uhPoints.push_back(pmax);
//     for(auto point:points){
//         if(point.first>pmin.first && point.first<pmax.first){
//             uhPoints.push_back(point);
//         }
//     }
//     sort(uhPoints.begin(),uhPoints.end(),compareX);

//     connect(pmin,pmax,uhPoints,edges);

// }

pair<pair<double, double>, pair<double, double>> LowerBridge(vector<pair<double, double>> &points, double a)
{
    vector<pair<double, double>> candidates;
    double n = points.size();
    if (points.size() == 2)
    {
        if (points[0].first < points[1].first)
            return {points[0], points[1]};
        else
            return {points[1], points[0]};
    }
    vector<pair<pair<double, double>, pair<double, double>>> pairs;
    vector<double> K;
    double i = 0;
    if (points.size() % 2 == 1)
    {
        candidates.push_back(points[0]);
        i++;
    }
    for (; i <= n - 2; i += 2)
    {
        double x1 = points[i].first;
        double x2 = points[i + 1].first;

        if (x1 <= x2)
        {
            pairs.push_back({points[i], points[i + 1]});
        }
        else
        {
            pairs.push_back({points[i + 1], points[i]});
        }
    }

    for (i = 0; i < pairs.size(); i++)
    {
        pair<double, double> p1 = pairs[i].first;
        pair<double, double> p2 = pairs[i].second;

        if (p1.first == p2.first)
        {
            if (p1.second > p2.second)
            {
                candidates.push_back(p1);
            }
            else
            {
                candidates.push_back(p2);
            }
        }
        else
        {
            K.push_back((double)(p1.second - p2.second) / (p1.first - p2.first));
        }
    }

    double medianK = findMedian(K);

    // cout<<"Hello"<<endl;
    vector<pair<pair<double, double>, pair<double, double>>> smaller, equal, larger;

    for (i = 0; i < pairs.size(); i++)
    {
        pair<double, double> p1 = pairs[i].first;
        pair<double, double> p2 = pairs[i].second;

        double slopeVal = (double)(p1.second - p2.second) / (p1.first - p2.first);
        if (slopeVal < medianK)
        {
            smaller.push_back({p1, p2});
        }
        else if (slopeVal == medianK)
        {
            equal.push_back({p1, p2});
        }
        else
        {
            larger.push_back({p1, p2});
        }
    }

    double maximumIntercept = INT_MIN;

    for (auto point : points)
    {
        double y = point.second;
        double x = point.first;

        if (maximumIntercept < y - medianK * x)
        {
            maximumIntercept = y - medianK * x;
        }
    }

    pair<double, double> pk = {INT_MAX, INT_MAX};
    pair<double, double> pm = {INT_MIN, INT_MIN};

    for (auto point : points)
    {
        double y = point.second;
        double x = point.first;

        if (y - medianK * x == maximumIntercept)
        {
            if (x < pk.first)
            {
                pk = {x, y};
            }
            if (x > pm.first)
            {
                pm = {x, y};
            }
        }
    }

    // Determine bridge

    if (pk.first <= a && pm.first > a)
    {
        // state 2
        return {pk, pm}; // Draw This edge
    }

    // state 3
    if (pm.first <= a)
    {
        for (auto pair : larger)
        {

            candidates.push_back(pair.second);
        }
        for (auto pair : equal)
        {
            candidates.push_back(pair.second);
        }
        for (auto pair : smaller)
        {
            candidates.push_back(pair.second);
            candidates.push_back(pair.first);
        }
    }

    if (pk.first > a)
    {
        for (auto pair : larger)
        {
            candidates.push_back(pair.second);
            candidates.push_back(pair.first);
        }
        for (auto pair : equal)
        {
            candidates.push_back(pair.first);
        }
        for (auto pair : smaller)
        {
            candidates.push_back(pair.first);
        }
    }

    return LowerBridge(candidates, a);
}

void connect_L(pair<double, double> pk, pair<double, double> pm, vector<pair<double, double>> &S, vector<pair<pair<double, double>, pair<double, double>>> &edges)
{
    double medianX;
    int n = S.size();
    // sort(S.begin(),S.end(),compareX);
    // if (n % 2 == 0)  medianX = ((double)S[n / 2].first + S[n / 2 - 1].first) / 2;
    // else medianX = (double)S[n / 2].first; // X = medianX

    // //show the median line
    // cout << "Median line: x = " << medianX << endl;   // PLot X=-medianX line

    pair<double, double> medianPoint = quickSelect_pair(S, 0, n - 1, n / 2); // Find the median point

    medianX = medianPoint.first;

    // Show the median line
    cout << "Median line: x = " << medianX << endl;

    pair<pair<double, double>, pair<double, double>> ub = UpperBridge(S, medianX);

    pair<double, double> pi = ub.first;
    pair<double, double> pj = ub.second;

    edges.push_back({{-ub.first.first, -ub.first.second}, {-ub.second.first, -ub.second.second}});

    vector<pair<double, double>> S_left, S_right;

    S_left.push_back(pi);
    S_right.push_back(pj);

    for (auto point : S)
    {
        if (point.first < pi.first)
        {
            S_left.push_back(point);
        }
        if (point.first > pj.first)
        {
            S_right.push_back(point);
        }
    }

    if (pi != pk)
    {
        connect_L(pk, pi, S_left, edges);
    }
    if (pj != pm)
    {
        connect_L(pj, pm, S_right, edges);
    }
}

void LowerHull(vector<pair<double, double>> &points, vector<pair<pair<double, double>, pair<double, double>>> &edges)
{

    int n = points.size();
    if (n == 2)
    {
        edges.push_back({points[0], points[1]}); // Draw the edge
        return;
    }

    sort(points.begin(), points.end(), compareX);

    pair<vector<pair<double, double>>, vector<int>> temp = findMinMaxX(points);

    pair<double, double> pmin = temp.first[0];
    pair<double, double> pmax = temp.first[1];

    int minIndex = temp.second[0];
    int maxIndex = temp.second[1];

    if (minIndex == maxIndex)
    {
        return;
    }

    vector<pair<double, double>> uhPoints;

    uhPoints.push_back(pmin);
    uhPoints.push_back(pmax);
    for (auto point : points)
    {
        if (point.first > pmin.first && point.first < pmax.first)
        {
            uhPoints.push_back(point);
        }
    }

    pair<double, double> medianPoint = quickSelect_pair(uhPoints, 0, uhPoints.size() - 1, uhPoints.size() / 2);
    double medianX = medianPoint.first;

    vector<pair<double, double>> uhPointsSorted = uhPoints;

    connect_L(pmin, pmax, uhPointsSorted, edges);
    // sort(uhPoints.begin(),uhPoints.end(),compareX);

    // connect1(pmin,pmax,uhPoints,edges);
}

int main()
{
    // Initial State
    vector<pair<double, double>> points = {{0, 0}, {8, 0}, {0, 8}, {8, 8}, {12, 4}, {4, 12}

    };
    pair<vector<pair<double, double>>, vector<int>> pupper, plower;
    pupper = findMinMaxX(points);

    vector<pair<pair<double, double>, pair<double, double>>> edges;

    // Start measuring time
    auto start = std::chrono::high_resolution_clock::now();

    UpperHull(points, edges);

    vector<pair<double, double>> invertedPoints;

    for (auto point : points)
    {
        invertedPoints.push_back({-point.first, -point.second});
    }
    plower = findMinMaxX(invertedPoints);

    LowerHull(invertedPoints, edges);

    // Joining upper and lower hull

    pair<double, double> pmin = pupper.first[0];
    pair<double, double> pmax = pupper.first[1];

    pair<double, double> pmin1 = plower.first[0];
    pair<double, double> pmax1 = plower.first[1];

    pmin1 = {-pmin1.first, -pmin1.second};
    pmax1 = {-pmax1.first, -pmax1.second};

    if (pmin != pmin1)
    {
        edges.push_back({pmin, pmin1});
    }
    if (pmax != pmax1)
    {
        edges.push_back({pmax, pmax1});
    }

    for (auto edge : edges)
    {
        cout << "(" << edge.first.first << "," << edge.first.second << "),(" << edge.second.first << "," << edge.second.second << ")" << endl;
        ;
    }
    // End measuring time
    auto stop = std::chrono::high_resolution_clock::now();

    // Calculate the execution time
    auto duration = std::chrono::duration_cast<std::chrono::microseconds>(stop - start);
    cout << "Time taken by function: " << duration.count() << " microseconds" << endl;
}`

export default KirkpatrickSiedelImplementation;