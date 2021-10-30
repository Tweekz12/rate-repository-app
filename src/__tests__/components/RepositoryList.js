import React from 'react';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { render } from '@testing-library/react-native';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

        expect(getAllByTestId('name')[0]).toHaveTextContent(repositories.edges[0].node.fullName);
        expect(getAllByTestId('name')[1]).toHaveTextContent(repositories.edges[1].node.fullName);
        expect(getAllByTestId('desc')[0]).toHaveTextContent(repositories.edges[0].node.description);
        expect(getAllByTestId('desc')[1]).toHaveTextContent(repositories.edges[1].node.description);
        expect(getAllByTestId('lang')[0]).toHaveTextContent(repositories.edges[0].node.language);
        expect(getAllByTestId('lang')[1]).toHaveTextContent(repositories.edges[1].node.language);
        // expect(getAllByTestId('starg')[0]).toHaveTextContent((repositories.edges[0].node.stargazersCount / 1000).toFixed(1));
        // expect(getAllByTestId('starg')[1]).toHaveTextContent(repositories.edges[1].node.stargazersCount);
        // expect(getAllByTestId('forks')[0]).toHaveTextContent(repositories.edges[0].node.forksCount);
        // expect(getAllByTestId('forks')[1]).toHaveTextContent(repositories.edges[1].node.forksCount);
        // expect(getAllByTestId('reviewCount')[0]).toHaveTextContent(repositories.edges[0].node.reviewCount);
        // expect(getAllByTestId('reviewCount')[1]).toHaveTextContent(repositories.edges[1].node.reviewCount);
        // expect(getAllByTestId('ratingAvg')[0]).toHaveTextContent(repositories.edges[0].node.ratingAverage);
        // expect(getAllByTestId('ratingAvg')[1]).toHaveTextContent(repositories.edges[1].node.ratingAverage);
      });
    });
  });