/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlogUser = /* GraphQL */ `
  query GetBlogUser($id: ID!) {
    getBlogUser(id: $id) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      posts {
        nextToken
        __typename
      }
      categories {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      replies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogUsers = /* GraphQL */ `
  query ListBlogUsers(
    $filter: ModelBlogUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlogPost = /* GraphQL */ `
  query GetBlogPost($id: ID!) {
    getBlogPost(id: $id) {
      id
      title
      tags
      post_img
      explanation
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        createdAt
        updatedAt
        __typename
      }
      userId
      category {
        id
        title
        userId
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      categoryId
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogUserPostsId
      categoryPostPostsId
      __typename
    }
  }
`;
export const listBlogPosts = /* GraphQL */ `
  query ListBlogPosts(
    $filter: ModelBlogPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        tags
        post_img
        explanation
        userId
        categoryId
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBlogComment = /* GraphQL */ `
  query GetBlogComment($id: ID!) {
    getBlogComment(id: $id) {
      id
      name
      website
      email
      comment
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        createdAt
        updatedAt
        __typename
      }
      userId
      post {
        id
        title
        tags
        post_img
        explanation
        userId
        categoryId
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      replycomments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogUserCommentsId
      blogPostCommentsId
      __typename
    }
  }
`;
export const listBlogComments = /* GraphQL */ `
  query ListBlogComments(
    $filter: ModelBlogCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        website
        email
        comment
        userId
        postId
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReplyComment = /* GraphQL */ `
  query GetReplyComment($id: ID!) {
    getReplyComment(id: $id) {
      id
      comment
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        createdAt
        updatedAt
        __typename
      }
      userId
      post {
        id
        name
        website
        email
        comment
        userId
        postId
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      commentId
      createdAt
      updatedAt
      blogUserRepliesId
      blogCommentReplycommentsId
      __typename
    }
  }
`;
export const listReplyComments = /* GraphQL */ `
  query ListReplyComments(
    $filter: ModelReplyCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplyComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        userId
        commentId
        createdAt
        updatedAt
        blogUserRepliesId
        blogCommentReplycommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCategoryPost = /* GraphQL */ `
  query GetCategoryPost($id: ID!) {
    getCategoryPost(id: $id) {
      id
      title
      user {
        id
        first_name
        last_name
        user_name
        email
        banner_pic
        user_pic
        createdAt
        updatedAt
        __typename
      }
      userId
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      blogUserCategoriesId
      __typename
    }
  }
`;
export const listCategoryPosts = /* GraphQL */ `
  query ListCategoryPosts(
    $filter: ModelCategoryPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        userId
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const blogPostsByTitleAndCategoryId = /* GraphQL */ `
  query BlogPostsByTitleAndCategoryId(
    $title: String!
    $categoryId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelblogPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogPostsByTitleAndCategoryId(
      title: $title
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        tags
        post_img
        explanation
        userId
        categoryId
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const blogCommentsByPostIdAndComment = /* GraphQL */ `
  query BlogCommentsByPostIdAndComment(
    $postId: ID!
    $comment: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelblogCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    blogCommentsByPostIdAndComment(
      postId: $postId
      comment: $comment
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        website
        email
        comment
        userId
        postId
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const categoryPostsByTitle = /* GraphQL */ `
  query CategoryPostsByTitle(
    $title: String!
    $sortDirection: ModelSortDirection
    $filter: ModelcategoryPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryPostsByTitle(
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        userId
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
