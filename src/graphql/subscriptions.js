/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlogUser = /* GraphQL */ `
  subscription OnCreateBlogUser($filter: ModelSubscriptionBlogUserFilterInput) {
    onCreateBlogUser(filter: $filter) {
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
export const onUpdateBlogUser = /* GraphQL */ `
  subscription OnUpdateBlogUser($filter: ModelSubscriptionBlogUserFilterInput) {
    onUpdateBlogUser(filter: $filter) {
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
export const onDeleteBlogUser = /* GraphQL */ `
  subscription OnDeleteBlogUser($filter: ModelSubscriptionBlogUserFilterInput) {
    onDeleteBlogUser(filter: $filter) {
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
export const onCreateBlogPost = /* GraphQL */ `
  subscription OnCreateBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onCreateBlogPost(filter: $filter) {
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
export const onUpdateBlogPost = /* GraphQL */ `
  subscription OnUpdateBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onUpdateBlogPost(filter: $filter) {
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
export const onDeleteBlogPost = /* GraphQL */ `
  subscription OnDeleteBlogPost($filter: ModelSubscriptionBlogPostFilterInput) {
    onDeleteBlogPost(filter: $filter) {
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
export const onCreateBlogComment = /* GraphQL */ `
  subscription OnCreateBlogComment(
    $filter: ModelSubscriptionBlogCommentFilterInput
  ) {
    onCreateBlogComment(filter: $filter) {
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
export const onUpdateBlogComment = /* GraphQL */ `
  subscription OnUpdateBlogComment(
    $filter: ModelSubscriptionBlogCommentFilterInput
  ) {
    onUpdateBlogComment(filter: $filter) {
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
export const onDeleteBlogComment = /* GraphQL */ `
  subscription OnDeleteBlogComment(
    $filter: ModelSubscriptionBlogCommentFilterInput
  ) {
    onDeleteBlogComment(filter: $filter) {
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
export const onCreateReplyComment = /* GraphQL */ `
  subscription OnCreateReplyComment(
    $filter: ModelSubscriptionReplyCommentFilterInput
  ) {
    onCreateReplyComment(filter: $filter) {
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
export const onUpdateReplyComment = /* GraphQL */ `
  subscription OnUpdateReplyComment(
    $filter: ModelSubscriptionReplyCommentFilterInput
  ) {
    onUpdateReplyComment(filter: $filter) {
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
export const onDeleteReplyComment = /* GraphQL */ `
  subscription OnDeleteReplyComment(
    $filter: ModelSubscriptionReplyCommentFilterInput
  ) {
    onDeleteReplyComment(filter: $filter) {
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
export const onCreateCategoryPost = /* GraphQL */ `
  subscription OnCreateCategoryPost(
    $filter: ModelSubscriptionCategoryPostFilterInput
  ) {
    onCreateCategoryPost(filter: $filter) {
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
export const onUpdateCategoryPost = /* GraphQL */ `
  subscription OnUpdateCategoryPost(
    $filter: ModelSubscriptionCategoryPostFilterInput
  ) {
    onUpdateCategoryPost(filter: $filter) {
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
export const onDeleteCategoryPost = /* GraphQL */ `
  subscription OnDeleteCategoryPost(
    $filter: ModelSubscriptionCategoryPostFilterInput
  ) {
    onDeleteCategoryPost(filter: $filter) {
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
