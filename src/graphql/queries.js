import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query {
        repositories {
        edges {
            node {
            ownerAvatarUrl,
            fullName,
            description,
            language,
            stargazersCount,
            forksCount,
            reviewCount,
            ratingAverage
            }
        }
        }
    }
`;

export const AUTHORIZE_USER = gql`
    query {
        authorizedUser {
            id,
            username
        }
    }
`;