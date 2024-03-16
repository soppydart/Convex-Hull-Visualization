import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './JarvisMarch.module.css'

function JarvisMarch() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "JarvisMarch/Build/builds.loader.js",
        dataUrl: "JarvisMarch/Build/builds.data",
        frameworkUrl: "JarvisMarch/Build/builds.framework.js",
        codeUrl: "JarvisMarch/Build/builds.wasm",
    });

    return <div className={styles.container}>
        <h1>Jarvis March Algorithm</h1>
        <Unity unityProvider={unityProvider} className={styles.canvas} />
    </div>;
}

export default JarvisMarch