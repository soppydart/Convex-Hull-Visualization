import { ChangeEvent, useRef, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { CopyBlock, dracula } from "react-code-blocks";
import JarvisMarchImplementation from './JarvisMarchImplementation';
import JarvisMarchDocumentation from './JarvisMarchDocumentation';

function JarvisMarch() {
    const [isOpen, setIsOpen] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const { unityProvider, sendMessage, isLoaded } = useUnityContext({
        loaderUrl: "JarvisMarch/Build/JarvisMarch.loader.js",
        dataUrl: "JarvisMarch/Build/JarvisMarch.data",
        frameworkUrl: "JarvisMarch/Build/JarvisMarch.framework.js",
        codeUrl: "JarvisMarch/Build/JarvisMarch.wasm",
    });

    function handleClickRandom() {
        class Point {
            constructor(public x: number, public y: number) { }
        }

        let points: Point[] = [];

        for (let i = 0; i < 10; i++) {
            let randomX: number = Math.round(((Math.random() * 40 - 20) * 100));
            let randomY: number = Math.round(((Math.random() * 20 - 10) * 100));
            console.log(randomX / 100);
            console.log(randomY / 100);
            console.log(typeof (randomX));
            points.push(new Point(randomX, randomY));
        }

        points.forEach(point => {
            sendMessage("mainObject", "InitializePoints", point.x);
            sendMessage("mainObject", "InitializePoints", point.y);
        });
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
    }

    return (
        <div className="bg-slate-900 min-h-screen font-code">
            <h1 className='text-6xl font-medium text-white text-center p-10'>Jarvis March Algorithm</h1>
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
            {isLoaded && <div className='flex justify-center mt-7'>
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

                <button onClick={openModal} type="button" className='mr-3 mb-1'>
                    <svg className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg><span className="sr-only">Show information</span></button>

                {isOpen && (
                    <div
                        id="default-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex items-center justify-center"
                    >
                        <div className="relative p-4 w-full max-w-2xl">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Format and Range of Input
                                    </h3>
                                    <button
                                        onClick={closeModal}
                                        type="button"
                                        className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 14"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                            />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="p-4 md:p-5 space-y-4">
                                    <p className="text-base leading-relaxed text-gray-400">
                                        Upload a .txt file containing coordinates of points in the format: (x1, y1), (x2, y2), (x3, y3), etc.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-400">
                                        The accepted range of coordinates is x = -25 to x = 25, and y = -10 to y = 10.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <button onClick={() => {

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
            </div>}

            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Description
            </h3>
            <div className="text-white max-w-6xl mx-auto mt-3">
                <p className='text-xl'>
                    The Jarvis March algorithm is used to compute the convex hull of a set of points in a 2D plane.
                    The convex hull is the smallest convex polygon that encloses all the points. The time complexity of
                    the Jarvis March algorithm is O(nh), where n is the number of points in the set and h is the number of points in the
                    convex hull. This is because in the worst case, each point is checked against
                    every other point to find the most counterclockwise point.
                    The algorithm works as follows:

                    <ul className="list-disc list-inside max-w-4xl mx-auto mt-10">
                        <li className='my-5'>
                            <strong>Find the Leftmost Point:</strong> Start with the leftmost point of the set,
                            as this point must be part of the convex hull. This is because all other points
                            are to the right and cannot form a boundary on the left side of the hull.
                        </li>
                        <li className='my-5'>
                            <strong>Wrap Around Points:</strong>  From the starting point, the algorithm
                            'wraps' around the set of points by selecting the point that is the most
                            counterclockwise compared to all others. The angle between the line formed
                            by the current point and each of the other points is checked, and the point
                            with the smallest angle is chosen as the next point of the hull.
                        </li>
                        <li className='my-5'>
                            <strong>Continue Wrapping:</strong> Repeat the process of stepping to the most
                            counterclockwise point until you return to the starting point. In each iteration,
                            the chosen point is the one that makes the smallest angle with the line formed
                            by the previous point and itself.
                        </li>
                        <li className='my-5'>
                            <strong>Form the Convex Hull:</strong> The process ends when the algorithm
                            returns to the starting point. The sequence of selected points forms the boundary
                            of the convex hull.
                        </li>
                    </ul>
                </p>
            </div>

            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Implementation
            </h3>
            <div className='mx-auto max-w-4xl mt-5'>
                <CopyBlock
                    language="cpp"
                    text={JarvisMarchImplementation}
                    wrapLongLines={false}
                    showLineNumbers={true}
                    theme={dracula}
                    codeBlock={true}
                />
            </div>
            <h3 className="text-5xl font-medium text-white p-10 text-center mt-10">
                Documentation
            </h3>
            <JarvisMarchDocumentation />
        </div >
    );
}

export default JarvisMarch