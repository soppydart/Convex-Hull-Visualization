import { ChangeEvent, useRef, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
// import { CopyBlock, dracula } from "react-code-blocks";
// import KirkpatrickSiedelImplementation from './KirkpatrickSiedelImplementation';
import KirkpatrickSeidelDocumentation from './KirkpatrickSeidelDocumentation';

function KirkpatrickSeidel() {
    const [buttonClicked, setButtonClicked] = useState<{ hasBeenClicked: boolean }>({
        hasBeenClicked: false,
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { unityProvider, sendMessage, isLoaded } = useUnityContext({
        loaderUrl: "KirkpatrickSeidel/Build/KirkpatrickSeidel.loader.js",
        dataUrl: "KirkpatrickSeidel/Build/KirkpatrickSeidel.data",
        frameworkUrl: "KirkpatrickSeidel/Build/KirkpatrickSeidel.framework.js",
        codeUrl: "KirkpatrickSeidel/Build/KirkpatrickSeidel.wasm",
    });

    function handleClickRandom() {
        if (buttonClicked.hasBeenClicked)
            return;

        setButtonClicked({ hasBeenClicked: true });

        class Point {
            constructor(public x: number, public y: number) { }
        }

        let points: Point[] = [];

        for (let i = 0; i < 10; i++) {
            let randomX: number = Math.round(((Math.random() * 10 - 5) * 100));
            let randomY: number = Math.round(((Math.random() * 6 - 3) * 100));
            console.log(randomX / 100);
            console.log(randomY / 100);
            console.log(typeof (randomX));
            points.push(new Point(randomX, randomY));
        }

        points.forEach(point => {
            sendMessage("mainObject", "InitializePoints", point.x);
            sendMessage("mainObject", "InitializePoints", point.y);
        });
        // sendMessage("mainObject", "InitializePoints", -9999);
    }

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (event) {
                const contents = event.target?.result as string;
                parseFileContents(contents);
            };

            reader.readAsText(file);
        }
    }

    function handleReloadScene() {
        setButtonClicked({ hasBeenClicked: false });
        sendMessage("mainObject", "Reload");
    }

    // Function to parse file contents and convert points to integers
    function parseFileContents(contents: string) {
        const points: number[] = [];
        const regex = /\((-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\)/g;
        let match: RegExpExecArray | null;

        while ((match = regex.exec(contents)) !== null) {
            const x = parseFloat(match[1]);
            const y = parseFloat(match[3]);
            points.push(x * 100, y * 100);
            console.log(`(${x}, ${y})`);
        }

        points.forEach(point => {
            sendMessage("mainObject", "InitializePoints", point);
        });
        sendMessage("mainObject", "InitializePoints", -9999);
    }

    return (
        <div className="bg-slate-900 min-h-screen font-code">
            <h1 className='text-6xl font-medium text-white text-center p-10'>Kirkpatrick-Seidel Algorithm</h1>
            <div className='flex justify-center'>
                {!isLoaded &&
                    <div role="status">
                        <svg aria-hidden="true" className="inline w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>}
            </div>
            <div className='flex justify-center'>
                <Unity unityProvider={unityProvider} style={{
                    width: '60%',
                    borderRadius: '1%',
                }} />
            </div>
            <div className='flex justify-center mt-7'>
                <div >
                    <input
                        id="file-upload"
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        accept=".txt"
                        className='hidden'
                    />
                </div>
                <button onClick={() => {
                    if (buttonClicked.hasBeenClicked)
                        return;
                    setButtonClicked({ hasBeenClicked: true });

                    fileInputRef.current?.click()
                }
                } className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mr-5'
                >Upload Input File</button>
                <button onClick={handleClickRandom}
                    className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-5 mr-5'>
                    Plot random points</button>
                <button onClick={handleReloadScene}
                    className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-5'>
                    Reload Demo</button>
            </div>

            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Description
            </h3>
            <div className="text-white max-w-6xl mx-auto mt-3">
                <p className='text-xl'>
                    The Kirkpatrick-Seidel algorithm  is an efficient method for computing the convex hull of
                    a set of points in a 2D plane. It is especially effective for larger data sets as it works in
                    O(nlogh) time, where n is the number of points and h is the number of points on the convex hull.
                    Here’s how it functions:

                    <ul className="list-disc list-inside max-w-4xl mx-auto mt-10">
                        <li className='my-5'>
                            <strong>Divide and Conquer:</strong> The algorithm employs a divide-and-conquer approach, where the set of points is divided into smaller subsets, the convex hull for each subset is computed, and then these hulls are merged to form the final convex hull.
                        </li>
                        <li className='my-5'>
                            <strong>Prune-and-Search Technique:</strong> At the heart of the algorithm is a prune-and-search technique
                            that efficiently finds the upper and lower bridges between two sets of points (which are the
                            tangents that join the two hulls). These bridges help in eliminating points that are not
                            part of the convex hull, thus reducing the problem size at each step.
                        </li>
                        <li className='my-5'>
                            <strong>Finding Bridges:</strong> To find the upper and lower bridges efficiently,
                            the algorithm calculates the median of the x-coordinates of the points and uses this
                            to split the set of points into left and right subsets. Then, it identifies the
                            bridge by connecting the points from each subset that form the tangent lines between
                            the two subsets.
                        </li>
                        <li className='my-5'>
                            <strong>Recursive Hull Construction:</strong> After finding the bridges,
                            the points that are inside the area defined by these bridges and the baseline
                            are not part of the convex hull and are discarded. The remaining points are
                            then used recursively to build the hulls for the left and right subsets.
                        </li>
                        <li className='my-5'>
                            <strong>Merging:</strong> The final step is to merge the hulls of the subsets to
                            form the complete convex hull. This is done by combining the hulls obtained from
                            the left and right subsets with the bridges that were found earlier.
                        </li>
                    </ul>

                </p>
            </div>

            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Implementation
            </h3>
            {/* <div className='mx-auto max-w-4xl mt-5'>
                <CopyBlock
                    language="cpp"
                    text={KirkpatrickSiedelImplementation}
                    wrapLongLines={false}
                    showLineNumbers={true}
                    theme={dracula}
                    codeBlock={true}
                />
            </div> */}
            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Documentation
            </h3>
            <KirkpatrickSeidelDocumentation />
        </div >
    );
}

export default KirkpatrickSeidel