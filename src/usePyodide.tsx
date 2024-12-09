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

    const loadModelParamsBuilder = async (pyodide: any) => {
        const functionName = "model_parameters_drivers";
        const response = await fetch("src/modelParameterBuilder.ipynb");
        const notebook = await response.json();

        // Extract code cells from the notebook
        const codeCells = notebook.cells.filter((cell: any) => cell.cell_type === "code");

        // Find the cell containing the function definition
        let functionFound = false;
        for (const cell of codeCells) {
            const code = cell.source.join("");
            if (code.includes(`def ${functionName}(`)) {
                await pyodide.runPythonAsync(code);
                functionFound = true;
                break;
            }
        }

        if (!functionFound) {
            throw new Error(`Function ${functionName} not found in the notebook.`);
        }
    };

    return { pyodide, loadModelParamsBuilder };

};

export default usePyodide;