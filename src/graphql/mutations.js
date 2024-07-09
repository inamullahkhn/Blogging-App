/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContactUs = /* GraphQL */ `
  mutation CreateContactUs(
    $subject: String!
    $name: String!
    $email: String!
    $explanation: String
    $image: String
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    createContactUs(
      subject: $subject
      name: $name
      email: $email
      explanation: $explanation
      image: $image
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      success
      message
      __typename
    }
  }
`;
export const createBlogUser = /* GraphQL */ `
  mutation CreateBlogUser(
    $input: CreateBlogUserInput!
    $condition: ModelBlogUserConditionInput
  ) {
    createBlogUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replies {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBlogUser = /* GraphQL */ `
  mutation UpdateBlogUser(
    $input: UpdateBlogUserInput!
    $condition: ModelBlogUserConditionInput
  ) {
    updateBlogUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replies {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBlogUser = /* GraphQL */ `
  mutation DeleteBlogUser(
    $input: DeleteBlogUserInput!
    $condition: ModelBlogUserConditionInput
  ) {
    deleteBlogUser(input: $input, condition: $condition) {
      id
      first_name
      last_name
      user_name
      email
      banner_pic
      user_pic
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        nextToken
        __typename
      }
      categories {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        nextToken
        __typename
      }
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replies {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlogPost = /* GraphQL */ `
  mutation CreateBlogPost(
    $input: CreateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    createBlogPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      category {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      categoryId
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const updateBlogPost = /* GraphQL */ `
  mutation UpdateBlogPost(
    $input: UpdateBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    updateBlogPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      category {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      categoryId
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const deleteBlogPost = /* GraphQL */ `
  mutation DeleteBlogPost(
    $input: DeleteBlogPostInput!
    $condition: ModelBlogPostConditionInput
  ) {
    deleteBlogPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      category {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCategoriesId
        __typename
      }
      categoryId
      comments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
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
            user {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCommentsId
          blogPostCommentsId
          __typename
        }
        nextToken
        __typename
      }
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const createBlogComment = /* GraphQL */ `
  mutation CreateBlogComment(
    $input: CreateBlogCommentInput!
    $condition: ModelBlogCommentConditionInput
  ) {
    createBlogComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
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
        user {
          id
          first_name
          last_name
          user_name
          email
          banner_pic
          user_pic
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const updateBlogComment = /* GraphQL */ `
  mutation UpdateBlogComment(
    $input: UpdateBlogCommentInput!
    $condition: ModelBlogCommentConditionInput
  ) {
    updateBlogComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
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
        user {
          id
          first_name
          last_name
          user_name
          email
          banner_pic
          user_pic
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const deleteBlogComment = /* GraphQL */ `
  mutation DeleteBlogComment(
    $input: DeleteBlogCommentInput!
    $condition: ModelBlogCommentConditionInput
  ) {
    deleteBlogComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
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
        user {
          id
          first_name
          last_name
          user_name
          email
          banner_pic
          user_pic
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      replycomments {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          blogComment {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          commentId
          post {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          postId
          createdAt
          updatedAt
          blogUserRepliesId
          blogPostReplycommentsId
          blogCommentReplycommentsId
          __typename
        }
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
export const createReplyComment = /* GraphQL */ `
  mutation CreateReplyComment(
    $input: CreateReplyCommentInput!
    $condition: ModelReplyCommentConditionInput
  ) {
    createReplyComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      blogComment {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
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
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        postId
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      commentId
      post {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      createdAt
      updatedAt
      blogUserRepliesId
      blogPostReplycommentsId
      blogCommentReplycommentsId
      __typename
    }
  }
`;
export const updateReplyComment = /* GraphQL */ `
  mutation UpdateReplyComment(
    $input: UpdateReplyCommentInput!
    $condition: ModelReplyCommentConditionInput
  ) {
    updateReplyComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      blogComment {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
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
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        postId
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      commentId
      post {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      createdAt
      updatedAt
      blogUserRepliesId
      blogPostReplycommentsId
      blogCommentReplycommentsId
      __typename
    }
  }
`;
export const deleteReplyComment = /* GraphQL */ `
  mutation DeleteReplyComment(
    $input: DeleteReplyCommentInput!
    $condition: ModelReplyCommentConditionInput
  ) {
    deleteReplyComment(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      blogComment {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
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
          user {
            id
            first_name
            last_name
            user_name
            email
            banner_pic
            user_pic
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
        postId
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserCommentsId
        blogPostCommentsId
        __typename
      }
      commentId
      post {
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
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          categories {
            items {
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
            nextToken
            __typename
          }
          comments {
            items {
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
            nextToken
            __typename
          }
          replies {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        userId
        category {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          posts {
            items {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserCategoriesId
          __typename
        }
        categoryId
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replycomments {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        blogUserPostsId
        categoryPostPostsId
        __typename
      }
      postId
      createdAt
      updatedAt
      blogUserRepliesId
      blogPostReplycommentsId
      blogCommentReplycommentsId
      __typename
    }
  }
`;
export const createCategoryPost = /* GraphQL */ `
  mutation CreateCategoryPost(
    $input: CreateCategoryPostInput!
    $condition: ModelCategoryPostConditionInput
  ) {
    createCategoryPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
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
export const updateCategoryPost = /* GraphQL */ `
  mutation UpdateCategoryPost(
    $input: UpdateCategoryPostInput!
    $condition: ModelCategoryPostConditionInput
  ) {
    updateCategoryPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
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
export const deleteCategoryPost = /* GraphQL */ `
  mutation DeleteCategoryPost(
    $input: DeleteCategoryPostInput!
    $condition: ModelCategoryPostConditionInput
  ) {
    deleteCategoryPost(input: $input, condition: $condition) {
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
        posts {
          items {
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
            userId
            category {
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
            categoryId
            comments {
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
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserPostsId
            categoryPostPostsId
            __typename
          }
          nextToken
          __typename
        }
        categories {
          items {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          nextToken
          __typename
        }
        comments {
          items {
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
            userId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            replycomments {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            blogUserCommentsId
            blogPostCommentsId
            __typename
          }
          nextToken
          __typename
        }
        replies {
          items {
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
            userId
            blogComment {
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
            commentId
            post {
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
              replycomments {
                nextToken
                __typename
              }
              createdAt
              updatedAt
              blogUserPostsId
              categoryPostPostsId
              __typename
            }
            postId
            createdAt
            updatedAt
            blogUserRepliesId
            blogPostReplycommentsId
            blogCommentReplycommentsId
            __typename
          }
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      userId
      posts {
        items {
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
            posts {
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
            categories {
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
            comments {
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
            replies {
              items {
                id
                comment
                userId
                commentId
                postId
                createdAt
                updatedAt
                blogUserRepliesId
                blogPostReplycommentsId
                blogCommentReplycommentsId
                __typename
              }
              nextToken
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          userId
          category {
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
            userId
            posts {
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
            createdAt
            updatedAt
            blogUserCategoriesId
            __typename
          }
          categoryId
          comments {
            items {
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
            nextToken
            __typename
          }
          replycomments {
            items {
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
              blogComment {
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
              createdAt
              updatedAt
              blogUserRepliesId
              blogPostReplycommentsId
              blogCommentReplycommentsId
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          blogUserPostsId
          categoryPostPostsId
          __typename
        }
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
