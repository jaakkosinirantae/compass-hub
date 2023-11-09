// filename: complexCode.js

/*
 * Complex JavaScript Code
 * Description: This code demonstrates a complex and elaborate implementation 
 *              of a social media platform with various features and functionalities.
 */

// Define the User class
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.friends = [];
  }

  addFriend(user) {
    if (!this.friends.includes(user)) {
      this.friends.push(user);
      user.friends.push(this);
    }
  }

  removeFriend(user) {
    if (this.friends.includes(user)) {
      this.friends = this.friends.filter(friend => friend !== user);
      user.friends = user.friends.filter(friend => friend !== this);
    }
  }

  getFriendsCount() {
    return this.friends.length;
  }
}

// Define the Post class
class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.comments = [];
    this.likes = [];
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }

  removeComment(user, commentIndex) {
    if (this.comments[commentIndex].user === user) {
      this.comments.splice(commentIndex, 1);
    }
  }

  addLike(user) {
    if (!this.likes.includes(user)) {
      this.likes.push(user);
    }
  }

  removeLike(user) {
    if (this.likes.includes(user)) {
      this.likes = this.likes.filter(like => like !== user);
    }
  }
}

// Create some user instances
const user1 = new User("John Doe", 30, "john@example.com");
const user2 = new User("Jane Smith", 25, "jane@example.com");
const user3 = new User("Bob Johnson", 35, "bob@example.com");

// Make users friends
user1.addFriend(user2);
user1.addFriend(user3);

// Create a post
const post1 = new Post(user1, "Hello World!");

// Add comments and likes to the post
post1.addComment(user2, "Nice post!");
post1.addComment(user3, "Great content!");
post1.addLike(user2);

// Output the friends count of user1
console.log(`${user1.name} has ${user1.getFriendsCount()} friends.`);

// Output the comments of post1
console.log(`Comments on post1:`);
post1.comments.forEach(comment => {
  console.log(`${comment.user.name}: ${comment.comment}`);
});