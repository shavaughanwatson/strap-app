import type { Schema, Attribute } from '@strapi/strapi';

export interface CommentComments extends Schema.Component {
  collectionName: 'components_comment_comments';
  info: {
    displayName: 'Comments';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    Comment: Attribute.Text;
    Likes: Attribute.Integer & Attribute.DefaultTo<0>;
    Author: Attribute.String;
    Posted: Attribute.DateTime;
  };
}

export interface HashtagHashtags extends Schema.Component {
  collectionName: 'components_hashtag_hashtags';
  info: {
    displayName: 'Hashtags';
    icon: 'bulletList';
  };
  attributes: {
    Hashtag: Attribute.String;
  };
}

export interface ShareurlSharePosts extends Schema.Component {
  collectionName: 'components_shareurl_share_posts';
  info: {
    displayName: 'SharePosts';
    description: '';
  };
  attributes: {
    Icon: Attribute.Media;
    ShareUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'comment.comments': CommentComments;
      'hashtag.hashtags': HashtagHashtags;
      'shareurl.share-posts': ShareurlSharePosts;
    }
  }
}
