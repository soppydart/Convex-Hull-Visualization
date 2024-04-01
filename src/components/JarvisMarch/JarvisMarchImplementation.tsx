const JarvisMarchImplementation = `#include <iostream>
#include <vector>

using namespace std;

class Point {
private:
    int x, y;
public:
    Point(int x, int y) : x(x), y(y) {}

    int getX() const { return x; }
    int getY() const { return y; }
};


int orientation(const Point &p, const Point &q, const Point &r) {
    int val = (q.getY() - p.getY()) * (r.getX() - q.getX()) -
              (q.getX() - p.getX()) * (r.getY() - q.getY());

    if (val == 0) return 0;  
    return (val > 0) ? 1 : 2;
}

void convexHull(Point points[], int n) {
    
    if (n < 3) return;
  
    vector<Point> hull;
   
    int l = 0;
    for (int i = 1; i < n; i++)
        if (points[i].getX() < points[l].getX())
            l = i;

    int p = l, q;
    for (int p = l, q; ; p = q) {
    hull.push_back(points[p]);

    q = (p + 1) % n;
    for (int i = 0; i < n; i++) {
        if (orientation(points[p], points[i], points[q]) == 2)
            q = i;
    }

    if (q == l) 
        break;
}
 
    for (const auto &point : hull)
        cout << "(" << point.getX() << ", " << point.getY() << ")\n";
}


int main() {
    Point points[] = {Point(0, 3), Point(2, 2), Point(1, 1), Point(2, 1),
                      Point(3, 0), Point(0, 0), Point(3, 3)};

    int n = sizeof(points) / sizeof(points[0]);

    convexHull(points, n);

    return 0;
}`

export default JarvisMarchImplementation;