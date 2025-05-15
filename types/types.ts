export interface Repository {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  isPrivate: boolean;
  trending?: string; // Optional field for trending repositories
}
export interface Activity {
  id: string;
  type: "push" | "issue" | "pr" | "release" | "fork" | "star";
  repo: string;
  time: string;
  description: string;
}

export interface Notification {
  id: string;
  type: "issue" | "pr" | "discussion" | "release" | "mention" | "review";
  title: string;
  repo: string;
  time: string;
  isUnread: boolean;
  reason: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  totalRepos: string;
}
