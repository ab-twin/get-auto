import React from "react";
import { GetautoServiceConsumer} from "../getauto-service-context";

const withGetautoService = () => (Wrapped) => {
    return (props) => {
        return (
            <GetautoServiceConsumer>
                {(GetautoService) => {
                    //const serviceProps = mapMethodToProps(bookstoreService);
                    return <Wrapped {...props} {...GetautoService} />;
                }}
            </GetautoServiceConsumer>
        );
    }
}

export default withGetautoService;