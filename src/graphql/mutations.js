import { gql } from '@apollo/client';

export const SIGN_IN = gql`
    mutation Authorize($input: AuthorizeInput) {
        authorize(credentials: $input) {
            accessToken
        }
    }
`;