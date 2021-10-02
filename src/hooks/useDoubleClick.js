import { useCallback, useEffect, useRef, useState } from 'react';

function useDoubleClick(callback, singleCallback) {
    const [elem, setElem] = useState(null);
    const countRef = useRef(0);
    const timerRef = useRef(null);
    const inputCallbackRef = useRef(null);
    const inputSingleCallbackRef = useRef(null);
    const callbackRef = useCallback(node => {
        setElem(node);
        callbackRef.current = node;
    }, []);

    useEffect(() => {
        inputCallbackRef.current = callback;
        inputSingleCallbackRef.current = singleCallback;
    });

    useEffect(() => {
        function handler(event) {
            console.log('timerRef', timerRef);
            const isDoubleClick = countRef.current + 1 === 2;
            const timerIsPresent = timerRef.current;
            if (timerIsPresent && isDoubleClick) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
                countRef.current = 0;
                if (inputCallbackRef.current) {
                    inputCallbackRef.current(event);
                }
            } else if (inputSingleCallbackRef.current) {
                inputSingleCallbackRef.current(event);
            }
            if (!timerIsPresent) {
                countRef.current += 1;
                timerRef.current = setTimeout(() => {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                    countRef.current = 0;
                }, 200);
            }
        }

        if (elem) {
            elem.addEventListener('click', handler);
        }

        return () => {
            if (elem) {
                elem.removeEventListener('click', handler);
            }
        };
    }, [elem]);
    return [callbackRef, elem];
}

export default useDoubleClick;