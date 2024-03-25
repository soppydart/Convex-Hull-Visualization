import { ChangeEvent, useRef, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { ColorRing } from 'react-loader-spinner'

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
        sendMessage("mainObject", "InitializePoints", -9999);
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
        <div className="bg-slate-900 min-h-screen">
            <h1 className='text-5xl font-medium text-white text-center p-10'>Kirkpatrick-Seidel Algorithm</h1>
            <div className='flex justify-center'>
                <ColorRing
                    visible={!isLoaded}
                    height="160"
                    width="160"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E']}
                />
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
                dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ml-5'>
                    Plot random points</button>
            </div>
        </div >
    );
}

export default KirkpatrickSeidel