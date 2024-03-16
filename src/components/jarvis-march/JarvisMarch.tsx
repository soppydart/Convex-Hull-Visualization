import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './JarvisMarch.module.css'

function JarvisMarch() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "JarvisMarch/Build/JarvisMarch.loader.js",
        dataUrl: "JarvisMarch/Build/JarvisMarch.data",
        frameworkUrl: "JarvisMarch/Build/JarvisMarch.framework.js",
        codeUrl: "JarvisMarch/Build/JarvisMarch.wasm",
    });

    return <div className={styles.container}>
        <h1>This is the demo for the Jarvis March algorithm</h1>
        <Unity unityProvider={unityProvider} className={styles.canvas} />
    </div>;
}

export default JarvisMarch