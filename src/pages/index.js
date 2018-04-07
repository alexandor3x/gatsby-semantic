import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Header, Container, Button, Divider, Card } from 'semantic-ui-react';
import { Block, Grid } from '@onextech/react-semantic-booster';
import config from '../utils/siteConfig';


const Wrapper = styled.div`
  flex: 1;
  height: 100%;
`;

const SectionHeader = styled(Header)`
  &.ui.header {
    font-size: 1.6em;
  }
`;

const SectionLead = styled.p`
  font-size: 1.25em;
`;

const Title = styled(Header)`
    &.ui.header {
      font-size: 2.6em;
      margin-bottom: 0.1em;
      margin-top: .25em;
    }
  `;

const Subtitle = styled.p`
    font-size: 1.26em;
    opacity: .46;
  `;

const ButtonLink = styled(Button)`
    &.ui.button {
      padding: 0;
      a {
        padding: 0.5em 1.2em;
      }
    }
  `;

const PaddedLink = styled(Link)`
  display: block;
  color: inherit;
  margin-bottom: 3px;
  &:hover {
    color: inherit;
  }
`;

const HeroContainer = styled.div`
  margin-bottom: 2em;
`;

const CaptionTitle = styled(Header)`
  letter-spacing: 1px;
`;

const PostLink = styled(Link)`
  display: flex;
  flex-flow: column;
  height: 100%;
  flex: 0 1 100%;
  text-decoration: none;

  div {
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`;

const Index = ({ data }) => {
  const posts = data.allContentfulPost.edges;

  return (
    <Wrapper>
      <Block textAlign="center" attached>
        <Container text>
          <HeroContainer>
            <CaptionTitle sub as="h1">{config.siteTitle}</CaptionTitle>
            <Title as="h2">{config.siteIntro}</Title>
            <Subtitle>{config.siteDescription}</Subtitle>
          </HeroContainer>
        </Container>
      </Block>

      {posts && (
        <Block attached secondary>
          <Grid container stackable attached>
            <Grid.Row columns="equal">
              {posts.map(({ node: post }) => (
                <Grid.Column key={post.id}>
                  <Link to={`/posts/${post.slug}/`}>
                    <Card fluid>
                      <Img sizes={post.heroImage.sizes} style={{ maxHeight: 200 }} />
                      <Card.Content>
                        <Card.Header>
                          {post.title}
                        </Card.Header>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Block>
      )}

      <Block textAlign="center" spacer={1}>
        <Container text>
          <SectionHeader as="h2">I'd love to hear from you</SectionHeader>
          <SectionLead>Got a project to share? Feel free to get in touch.</SectionLead>
          <Divider hidden />
          <ButtonLink primary size="huge" circular>
            <PaddedLink to="/contact">Message me</PaddedLink>
          </ButtonLink>
        </Container>
      </Block>

    </Wrapper>
  );
};

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate
        }
      }
    }
  }
`;

export default Index;
