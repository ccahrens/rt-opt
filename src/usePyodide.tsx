import { useState, useEffect } from "react";

// This code was generated with help from ChatGPT and other online resources.
const usePyodide = () => {
    const [pyodide, setPyodide] = useState<any>(null);

    useEffect(() => {
        const loadPyodide = async () => {
            const pyodideModule = await (window as any).loadPyodide();
            setPyodide(pyodideModule);
        };
        loadPyodide();
    }, []);

    return pyodide;
};

export default usePyodide;