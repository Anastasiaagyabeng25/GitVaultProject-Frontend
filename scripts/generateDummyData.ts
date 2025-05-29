// scripts/generateDummyData.ts
import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "../firebase.config";

// Dummy data for repositories
const repositories = [
  {
    id: "1",
    name: "facebook/react",
    description:
      "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    language: "JavaScript",
    stars: 189000,
    forks: 38500,
    isPrivate: false,
    trending: "+ 120 stars today",
    owner: "facebook",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2024-05-28"),
    topics: ["ui", "frontend", "javascript", "library"],
  },
  {
    id: "2",
    name: "microsoft/vscode",
    description: "Visual Studio Code",
    language: "TypeScript",
    stars: 137000,
    forks: 23400,
    isPrivate: false,
    trending: "+ 98 stars today",
    owner: "microsoft",
    createdAt: new Date("2022-09-20"),
    updatedAt: new Date("2024-05-29"),
    topics: ["editor", "typescript", "ide"],
  },
  {
    id: "3",
    name: "flutter/flutter",
    description:
      "Flutter makes it easy and fast to build beautiful apps for mobile and beyond",
    language: "Dart",
    stars: 142000,
    forks: 22800,
    isPrivate: false,
    trending: "+ 95 stars today",
    owner: "flutter",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2024-05-27"),
    topics: ["mobile", "cross-platform", "dart", "ui"],
  },
  {
    id: "4",
    name: "username/my-project",
    description: "A really cool project I'm working on",
    language: "JavaScript",
    stars: 12,
    forks: 3,
    isPrivate: false,
    owner: "username",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-05-25"),
    topics: ["personal", "javascript", "web"],
  },
  {
    id: "5",
    name: "username/another-repo",
    description: "Another repository with some code",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    isPrivate: false,
    owner: "username",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-05-20"),
    topics: ["typescript", "personal"],
  },
  {
    id: "6",
    name: "org/private-project",
    description: "A private organization project",
    language: "Python",
    stars: 0,
    forks: 0,
    isPrivate: true,
    owner: "org",
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-05-15"),
    topics: ["python", "private", "organization"],
  },
];

// Dummy data for activities
const activities = [
  {
    id: "1",
    type: "push",
    repo: "username/my-project",
    time: "2h ago",
    description: "You pushed 3 commits to main",
    user: "username",
    avatar: "https://github.com/username.png",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "2",
    type: "issue",
    repo: "org/project",
    time: "5h ago",
    description: "You opened issue #42: Fix navigation error",
    user: "username",
    avatar: "https://github.com/username.png",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "3",
    type: "pr",
    repo: "username/another-repo",
    time: "1d ago",
    description: "Your PR #15 was merged",
    user: "username",
    avatar: "https://github.com/username.png",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "4",
    type: "star",
    repo: "facebook/react",
    time: "2d ago",
    description: "You starred facebook/react",
    user: "username",
    avatar: "https://github.com/username.png",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: "5",
    type: "fork",
    repo: "microsoft/vscode",
    time: "3d ago",
    description: "You forked microsoft/vscode",
    user: "username",
    avatar: "https://github.com/username.png",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

// Dummy data for notifications
const notifications = [
  {
    id: "1",
    type: "issue",
    title: "Fix navigation bug in home screen",
    repo: "username/my-project",
    time: "10m ago",
    isUnread: true,
    reason: "You were assigned",
    url: "https://github.com/username/my-project/issues/42",
    timestamp: new Date(Date.now() - 10 * 60 * 1000),
  },
  {
    id: "2",
    type: "pr",
    title: "Add dark mode support",
    repo: "organization/team-project",
    time: "2h ago",
    isUnread: true,
    reason: "Review requested",
    url: "https://github.com/organization/team-project/pull/15",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: "3",
    type: "discussion",
    title: "Discuss the architecture for new feature",
    repo: "username/another-repo",
    time: "5h ago",
    isUnread: false,
    reason: "You were mentioned",
    url: "https://github.com/username/another-repo/discussions/8",
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
  },
  {
    id: "4",
    type: "release",
    title: "v1.2.0 has been released",
    repo: "popular/library",
    time: "1d ago",
    isUnread: false,
    reason: "Release",
    url: "https://github.com/popular/library/releases/tag/v1.2.0",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: "5",
    type: "issue",
    title: "Update documentation for API changes",
    repo: "org/documentation",
    time: "2d ago",
    isUnread: false,
    reason: "Subscribed",
    url: "https://github.com/org/documentation/issues/123",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: "6",
    type: "pr",
    title: "Refactor authentication flow",
    repo: "username/my-project",
    time: "3d ago",
    isUnread: false,
    reason: "Your PR",
    url: "https://github.com/username/my-project/pull/78",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
];

// Dummy data for topics
const topics = [
  {
    id: "1",
    name: "react",
    description: "React is a JavaScript library for building user interfaces.",
    totalRepos: "148K",
    featured: true,
    color: "#61dafb",
  },
  {
    id: "2",
    name: "machine-learning",
    description: "Machine learning is a method of data analysis.",
    totalRepos: "57K",
    featured: true,
    color: "#ff6b6b",
  },
  {
    id: "3",
    name: "web-development",
    description: "Development of websites and web applications.",
    totalRepos: "124K",
    featured: true,
    color: "#4ecdc4",
  },
  {
    id: "4",
    name: "android",
    description:
      "Android is an open source operating system for mobile devices.",
    totalRepos: "112K",
    featured: false,
    color: "#a4c639",
  },
  {
    id: "5",
    name: "ios",
    description: "iOS development resources and tools.",
    totalRepos: "89K",
    featured: false,
    color: "#007aff",
  },
  {
    id: "6",
    name: "python",
    description: "Python programming language resources.",
    totalRepos: "203K",
    featured: true,
    color: "#3776ab",
  },
  {
    id: "7",
    name: "javascript",
    description: "JavaScript programming language and frameworks.",
    totalRepos: "267K",
    featured: true,
    color: "#f7df1e",
  },
  {
    id: "8",
    name: "typescript",
    description: "TypeScript programming language resources.",
    totalRepos: "95K",
    featured: false,
    color: "#3178c6",
  },
];

// Dummy data for user profile
const userProfile = {
  id: "user-1",
  username: "johndoe",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://github.com/johndoe.png",
  bio: "Software developer passionate about open source",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  company: "Tech Corp",
  repositories: 12,
  starred: 89,
  following: 45,
  followers: 67,
  sponsors: 3,
  joinedDate: new Date("2020-01-15"),
  publicRepos: 8,
  privateRepos: 4,
  contributions: 1247,
};

// Function to populate Firestore with dummy data
export async function generateDummyData() {
  try {
    const batch = writeBatch(db);

    // Add repositories
    for (const repo of repositories) {
      const repoRef = doc(collection(db, "repositories"));
      batch.set(repoRef, repo);
    }

    // Add activities
    for (const activity of activities) {
      const activityRef = doc(collection(db, "activities"));
      batch.set(activityRef, activity);
    }

    // Add notifications
    for (const notification of notifications) {
      const notificationRef = doc(collection(db, "notifications"));
      batch.set(notificationRef, notification);
    }

    // Add topics
    for (const topic of topics) {
      const topicRef = doc(collection(db, "topics"));
      batch.set(topicRef, topic);
    }

    // Add user profile
    const userRef = doc(collection(db, "users"), "current-user");
    batch.set(userRef, userProfile);

    // Commit the batch
    await batch.commit();
    console.log("Dummy data successfully added to Firestore!");
  } catch (error) {
    console.error("Error adding dummy data: ", error);
  }
}

// Run this function once to populate your Firestore
generateDummyData();

// if (require.main === module) {
//   generateDummyData();
// }
