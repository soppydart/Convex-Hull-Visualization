import { ChangeEvent, useRef, useState } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import { ColorRing } from 'react-loader-spinner'
import styles from './JarvisMarch.module.css'

function JarvisMarch() {
    const [buttonClicked, setButtonClicked] = useState<{ hasBeenClicked: boolean }>({
        hasBeenClicked: false,
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const { unityProvider, sendMessage, isLoaded } = useUnityContext({
        loaderUrl: "JarvisMarch/Build/JarvisMarch.loader.js",
        dataUrl: "JarvisMarch/Build/JarvisMarch.data",
        frameworkUrl: "JarvisMarch/Build/JarvisMarch.framework.js",
        codeUrl: "JarvisMarch/Build/JarvisMarch.wasm",
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

    return <div className={styles.container}>
        <h1>Jarvis March Algorithm</h1>
        {!isLoaded && <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#E40303', '#FF8C00', '#FFED00', '#008026', '#24408E']}
        />}
        <Unity unityProvider={unityProvider} className={styles.canvas} />
        <div className={styles.initializeButtons}>
            <div className={styles.fileInputContainer}>
                <input
                    id="file-upload"
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept=".txt"
                    className={styles.fileInput}
                />
            </div>
            <button onClick={() => {
                if (buttonClicked.hasBeenClicked)
                    return;
                setButtonClicked({ hasBeenClicked: true });

                fileInputRef.current?.click()
            }} className={styles.buttons}>Upload Input File</button>
            <button onClick={handleClickRandom} className={styles.buttons}>Plot random points</button>
        </div>
    </div >;
}

export default JarvisMarch