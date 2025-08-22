export interface Question {
  id: string;
  title: string;
  category: 'javascript' | 'react' | 'nodejs' | 'system-design' | 'algorithms' | 'databases';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  answer: string;
  tags: string[];
  createdAt: string;
}

export const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'What is the difference between let, const, and var?',
    category: 'javascript',
    difficulty: 'beginner',
    description: 'Explain the key differences between let, const, and var keywords in JavaScript, including their scoping rules, hoisting behavior, and when to use each one.',
    answer: 'var is function-scoped and hoisted with undefined initialization. let is block-scoped, hoisted but not initialized (temporal dead zone). const is block-scoped, must be initialized at declaration, and cannot be reassigned (though objects/arrays can be mutated). Use const by default, let when reassignment is needed, avoid var in modern code.',
    tags: ['variables', 'scope', 'hoisting'],
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Explain React useEffect hook',
    category: 'react',
    difficulty: 'intermediate',
    description: 'What is the useEffect hook in React? How does it work, what are its dependencies, and when should you use it?',
    answer: 'useEffect is a React hook that lets you perform side effects in functional components. It runs after render and can be controlled with a dependency array. Empty array [] runs once on mount, no array runs on every render, array with values runs when those values change. Use it for API calls, subscriptions, timers, and cleanup.',
    tags: ['hooks', 'side-effects', 'lifecycle'],
    createdAt: '2024-01-14',
  },
  {
    id: '3',
    title: 'Design a URL Shortener System',
    category: 'system-design',
    difficulty: 'advanced',
    description: 'Design a URL shortener service like bit.ly. Consider scalability, performance, and reliability requirements.',
    answer: 'Key components: Load balancer, web servers, application servers, cache layer (Redis), database (MySQL/NoSQL), analytics service. Use base62 encoding for short URLs, implement rate limiting, design for horizontal scaling, consider CDN for global access, implement analytics tracking, and plan for data archival.',
    tags: ['scalability', 'architecture', 'design'],
    createdAt: '2024-01-13',
  },
  {
    id: '4',
    title: 'Implement Binary Search Algorithm',
    category: 'algorithms',
    difficulty: 'intermediate',
    description: 'Write a function to implement binary search on a sorted array. Analyze its time and space complexity.',
    answer: 'Binary search repeatedly divides the search space in half. Time complexity: O(log n), Space complexity: O(1) iterative, O(log n) recursive. Implementation: Compare target with middle element, adjust left/right boundaries, repeat until found or bounds cross.',
    tags: ['search', 'algorithms', 'complexity'],
    createdAt: '2024-01-12',
  },
  {
    id: '5',
    title: 'SQL Joins and their Types',
    category: 'databases',
    difficulty: 'intermediate',
    description: 'Explain different types of SQL joins with examples and when to use each type.',
    answer: 'INNER JOIN: Returns records with matches in both tables. LEFT JOIN: All records from left table plus matches from right. RIGHT JOIN: All records from right table plus matches from left. FULL OUTER JOIN: All records from both tables. CROSS JOIN: Cartesian product of both tables.',
    tags: ['sql', 'joins', 'queries'],
    createdAt: '2024-01-11',
  },
  {
    id: '6',
    title: 'Node.js Event Loop Explained',
    category: 'nodejs',
    difficulty: 'advanced',
    description: 'Explain how the Node.js event loop works and its different phases.',
    answer: 'The event loop has six phases: Timer (setTimeout/setInterval), Pending callbacks, Idle/Prepare, Poll (new I/O events), Check (setImmediate), Close callbacks. Each phase has a FIFO queue. Process runs continuously, executing callbacks from each phase queue. Microtasks (promises, process.nextTick) have priority between phases.',
    tags: ['event-loop', 'asynchronous', 'performance'],
    createdAt: '2024-01-10',
  },
];

export const categories = [
  { value: 'javascript', label: 'JavaScript', color: 'bg-yellow-500' },
  { value: 'react', label: 'React', color: 'bg-blue-500' },
  { value: 'nodejs', label: 'Node.js', color: 'bg-green-500' },
  { value: 'system-design', label: 'System Design', color: 'bg-purple-500' },
  { value: 'algorithms', label: 'Algorithms', color: 'bg-red-500' },
  { value: 'databases', label: 'Databases', color: 'bg-indigo-500' },
];

export const difficulties = [
  { value: 'beginner', label: 'Beginner', color: 'bg-green-500' },
  { value: 'intermediate', label: 'Intermediate', color: 'bg-yellow-500' },
  { value: 'advanced', label: 'Advanced', color: 'bg-red-500' },
];