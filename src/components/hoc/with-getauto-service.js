import React from "react";
import { GetautoServiceConsumer} from "../getauto-service-context";

const withGetautoService = () => (Wrapped) => {
    return (props) => {
        return (
            <GetautoServiceConsumer>
                {(getautoService) => {
                    //const serviceProps = mapMethodToProps(bookstoreService);
                    return <Wrapped {...props} getautoService={getautoService} />;
                }}
            </GetautoServiceConsumer>
        );
    }
}

export default withGetautoService;