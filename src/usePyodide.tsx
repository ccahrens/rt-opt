import { useState, useEffect } from "react";

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