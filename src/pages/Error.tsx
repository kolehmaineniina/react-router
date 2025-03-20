import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h1>Oops! Something went wrong.</h1> 
            {isRouteErrorResponse(error) && <p> {error.data || "Unknown error"}</p>}
        </>
    )
};