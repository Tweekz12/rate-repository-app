import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { loading, error, data } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network' });
    const [repositories, setRepositories] = useState();

    const fetchRepositories = async () => {
        if (data) {
            setRepositories(data.repositories);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, [data]);

    return { repositories, refetch: fetchRepositories};
};

export default useRepositories;