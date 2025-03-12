export const hardSet1 = {
    setDifficulty : "Hard",

    setNumber : "H1",

    time : 4 * 60 * 60 * 1000,

    questions : 
        [
            {
              "questionTitle": "Which graph algorithm can detect negative weight cycles in a directed graph?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Prim's Algorithm", "Bellman-Ford Algorithm"],
              "correctAnswer": "Bellman-Ford Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a database, what type of index is created to improve the performance of queries involving NULL values?",
              "options": ["Clustered Index", "Filtered Index", "Non-Clustered Index", "Unique Index"],
              "correctAnswer": "Filtered Index",
              "typeOfQuestion": "mcq",
              "subject": "Database Management System",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which type of memory consistency model ensures that all processors see writes to the same memory location in the same order?",
              "options": ["Sequential Consistency", "Weak Consistency", "Release Consistency", "Eventual Consistency"],
              "correctAnswer": "Sequential Consistency",
              "typeOfQuestion": "mcq",
              "subject": "Computer Architecture",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In the context of operating systems, what is the primary purpose of the 'TLB shootdown' process?",
              "options": ["To clear the page table entries", "To invalidate TLB entries across all processors", "To update the TLB with new mappings", "To handle page faults"],
              "correctAnswer": "To invalidate TLB entries across all processors",
              "typeOfQuestion": "mcq",
              "subject": "Operating Systems",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the main advantage of using a Patricia Trie over a regular Trie?",
              "options": ["Reduced memory usage", "Faster insertions", "Support for dynamic keys", "Simplified structure"],
              "correctAnswer": "Reduced memory usage",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In networking, which type of attack exploits the TCP three-way handshake mechanism to cause resource exhaustion?",
              "options": ["DDoS Attack", "SYN Flood Attack", "ARP Spoofing", "Port Scanning"],
              "correctAnswer": "SYN Flood Attack",
              "typeOfQuestion": "mcq",
              "subject": "Computer Networks",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which design pattern is most suitable for dynamically adding behavior to an object without modifying its class?",
              "options": ["Decorator Pattern", "Factory Pattern", "Singleton Pattern", "Builder Pattern"],
              "correctAnswer": "Decorator Pattern",
              "typeOfQuestion": "mcq",
              "subject": "Object-Oriented Programming",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a relational database, what type of join returns rows when there is a match in both tables, along with unmatched rows from the left table?",
              "options": ["Inner Join", "Full Outer Join", "Left Join", "Cross Join"],
              "correctAnswer": "Left Join",
              "typeOfQuestion": "mcq",
              "subject": "Database Management System",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used to solve the maximum flow problem in a flow network?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm", "Ford-Fulkerson Algorithm"],
              "correctAnswer": "Ford-Fulkerson Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which CPU scheduling algorithm minimizes the average waiting time but can lead to process starvation?",
              "options": ["Round Robin", "Priority Scheduling", "Shortest Job Next", "First-Come, First-Served"],
              "correctAnswer": "Shortest Job Next",
              "typeOfQuestion": "mcq",
              "subject": "Operating Systems",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which consistency model allows read operations to return stale data in a distributed system?",
              "options": ["Sequential Consistency", "Eventual Consistency", "Causal Consistency", "Strong Consistency"],
              "correctAnswer": "Eventual Consistency",
              "typeOfQuestion": "mcq",
              "subject": "Computer Networks",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used to find bridges and articulation points in a graph?",
              "options": ["Prim's Algorithm", "Tarjan's Algorithm", "Kruskal's Algorithm", "Dijkstra's Algorithm"],
              "correctAnswer": "Tarjan's Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In the context of memory management, which strategy allows a process to use more memory than is physically available?",
              "options": ["Segmentation", "Virtual Memory", "Paging", "Fragmentation"],
              "correctAnswer": "Virtual Memory",
              "typeOfQuestion": "mcq",
              "subject": "Operating Systems",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the key characteristic of a self-organizing list?",
              "options": ["Random access", "Sorted order", "Frequently accessed elements moved to the front", "Memory-efficient"],
              "correctAnswer": "Frequently accessed elements moved to the front",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In cryptography, which algorithm is used for secure symmetric key exchange?",
              "options": ["RSA", "Elliptic Curve", "Diffie-Hellman", "AES"],
              "correctAnswer": "Diffie-Hellman",
              "typeOfQuestion": "mcq",
              "subject": "Computer Networks",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In machine learning, what is the purpose of the 'dropout' technique?",
              "options": ["Increase training speed", "Reduce overfitting", "Improve accuracy", "Handle missing data"],
              "correctAnswer": "Reduce overfitting",
              "typeOfQuestion": "mcq",
              "subject": "Machine Learning",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the purpose of the 'volatile' keyword in Java?",
              "options": ["Ensure atomicity", "Prevent compiler optimization", "Ensure visibility across threads", "Prevent memory leaks"],
              "correctAnswer": "Ensure visibility across threads",
              "typeOfQuestion": "mcq",
              "subject": "Programming",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used in garbage collection to identify and remove unused objects?",
              "options": ["Mark and Sweep", "Kruskal's Algorithm", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
              "correctAnswer": "Mark and Sweep",
              "typeOfQuestion": "mcq",
              "subject": "Programming",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In machine learning, which type of regularization adds the squared magnitude of coefficients as a penalty term?",
              "options": ["L1 Regularization", "L2 Regularization", "Elastic Net", "Dropout"],
              "correctAnswer": "L2 Regularization",
              "typeOfQuestion": "mcq",
              "subject": "Machine Learning",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is most efficient for implementing an LRU cache?",
              "options": ["Stack", "Queue", "Hash Map + Doubly Linked List", "Binary Search Tree"],
              "correctAnswer": "Hash Map + Doubly Linked List",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },

                {
                  "questionTitle": "Which hashing technique is most effective in handling hash collisions?",
                  "options": ["Linear Probing", "Quadratic Probing", "Double Hashing", "Separate Chaining"],
                  "correctAnswer": "Separate Chaining",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In distributed systems, which consensus algorithm is designed to tolerate Byzantine faults?",
                  "options": ["Paxos", "Raft", "Two-Phase Commit", "PBFT"],
                  "correctAnswer": "PBFT",
                  "typeOfQuestion": "mcq",
                  "subject": "Distributed Systems",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In a compiler, which optimization technique removes computations that produce the same result multiple times?",
                  "options": ["Constant Folding", "Loop Unrolling", "Common Subexpression Elimination", "Dead Code Elimination"],
                  "correctAnswer": "Common Subexpression Elimination",
                  "typeOfQuestion": "mcq",
                  "subject": "Compilers",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which type of memory barrier ensures that all previous write operations are visible to other processors before continuing?",
                  "options": ["Acquire Barrier", "Release Barrier", "Full Barrier", "Read Barrier"],
                  "correctAnswer": "Full Barrier",
                  "typeOfQuestion": "mcq",
                  "subject": "Computer Architecture",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In the context of machine learning, which loss function is most suitable for binary classification problems?",
                  "options": ["Mean Squared Error", "Cross Entropy Loss", "Huber Loss", "Mean Absolute Error"],
                  "correctAnswer": "Cross Entropy Loss",
                  "typeOfQuestion": "mcq",
                  "subject": "Machine Learning",
                  "difficultyLevel": "hard"
                },

                
                    {
                      "questionTitle": "Explain the concept of amortized analysis and how it applies to dynamic array resizing.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the differences between AVL Trees and Red-Black Trees. Discuss their advantages and disadvantages.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of the KMP (Knuth-Morris-Pratt) string matching algorithm with an example.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the Bellman-Ford algorithm for finding shortest paths in a graph. How does it handle negative weight cycles?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of memoization and tabulation in dynamic programming. Provide an example where both techniques are applied.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Dynamic Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the concept of network flow. Explain the Ford-Fulkerson algorithm with an example.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of the Rabin-Karp algorithm for string matching. How does hashing improve performance?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the concept of Strongly Connected Components (SCC) in a directed graph. How is Kosaraju’s algorithm used to find SCCs?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of persistent data structures. How do they differ from regular data structures?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the working of the A* search algorithm. How does the heuristic function influence its performance?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Artificial Intelligence",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of skip lists. How are they used to improve search efficiency?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the concept of splay trees. How does the self-adjusting property of splay trees improve performance?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of backtracking with an example of the N-Queens problem.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the concept of linear programming. How does the Simplex algorithm solve linear programming problems?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Mathematics",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of binary indexed trees (Fenwick Trees). How do they enable efficient range queries and updates?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                        {
                          "questionTitle": "Write a function to find the longest substring without repeating characters.",
                          "example": {
                            "input": "abcabcbb",
                            "output": "abc"
                          },
                          "testCase": [
                            { "input": "bbbbb", "expectedOutput": "b" },
                            { "input": "pwwkew", "expectedOutput": "wke" },
                            { "input": "abcdabc", "expectedOutput": "abcd" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to implement the merge step of the merge sort algorithm.",
                          "example": {
                            "input": "[1, 3, 5], [2, 4, 6]",
                            "output": "[1, 2, 3, 4, 5, 6]"
                          },
                          "testCase": [
                            { "input": "[1, 4, 7], [2, 5, 8]", "expectedOutput": "[1, 2, 4, 5, 7, 8]" },
                            { "input": "[3, 6, 9], [1, 4, 7]", "expectedOutput": "[1, 3, 4, 6, 7, 9]" },
                            { "input": "[10, 20], [5, 15, 25]", "expectedOutput": "[5, 10, 15, 20, 25]" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Algorithms",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the maximum sum subarray using the Kadane's algorithm.",
                          "example": {
                            "input": "[-2,1,-3,4,-1,2,1,-5,4]",
                            "output": "6"
                          },
                          "testCase": [
                            { "input": "[1,2,-1,3,4,-6,2,8,-1]", "expectedOutput": "12" },
                            { "input": "[-1,-2,-3,-4]", "expectedOutput": "-1" },
                            { "input": "[5,4,-1,7,8]", "expectedOutput": "23" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Dynamic Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the shortest path between two nodes in a weighted graph using Dijkstra's algorithm.",
                          "example": {
                            "input": "{0: [(1, 4), (2, 1)], 1: [(3, 1)], 2: [(1, 2), (3, 5)], 3: []}",
                            "output": "4"
                          },
                          "testCase": [
                            { "input": "{0: [(1, 3), (2, 2)], 1: [(3, 1)], 2: [(3, 4)], 3: []}", "expectedOutput": "4" },
                            { "input": "{0: [(1, 5)], 1: [(2, 1)], 2: [(3, 2)], 3: []}", "expectedOutput": "8" },
                            { "input": "{0: [(1, 1), (2, 4)], 1: [(2, 2), (3, 6)], 2: [(3, 1)], 3: []}", "expectedOutput": "4" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Graph Theory",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to count the number of inversions in an array using merge sort.",
                          "example": {
                            "input": "[2, 4, 1, 3, 5]",
                            "output": "3"
                          },
                          "testCase": [
                            { "input": "[1, 3, 2, 4]", "expectedOutput": "1" },
                            { "input": "[5, 4, 3, 2, 1]", "expectedOutput": "10" },
                            { "input": "[1, 2, 3, 4, 5]", "expectedOutput": "0" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Algorithms",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to solve the N-Queens problem and return all possible solutions.",
                          "example": {
                            "input": "4",
                            "output": "[[1,3,0,2],[2,0,3,1]]"
                          },
                          "testCase": [
                            { "input": "1", "expectedOutput": "[[0]]" },
                            { "input": "8", "expectedOutput": "92" },
                            { "input": "5", "expectedOutput": "10" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Backtracking",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to detect a cycle in a directed graph using DFS.",
                          "example": {
                            "input": "{0: [1], 1: [2], 2: [0]}",
                            "output": "True"
                          },
                          "testCase": [
                            { "input": "{0: [1], 1: [2], 2: [3], 3: []}", "expectedOutput": "False" },
                            { "input": "{0: [1], 1: [2], 2: [0]}", "expectedOutput": "True" },
                            { "input": "{0: [1, 2], 1: [2], 2: []}", "expectedOutput": "False" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Graph Theory",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the kth smallest element in a matrix sorted row-wise and column-wise.",
                          "example": {
                            "input": "[[1,5,9],[10,11,13],[12,13,15]], k = 8",
                            "output": "13"
                          },
                          "testCase": [
                            { "input": "[[1,2],[1,3]], k = 2", "expectedOutput": "1" },
                            { "input": "[[1,3,5],[6,7,12],[11,14,14]], k = 6", "expectedOutput": "11" },
                            { "input": "[[1,2,3],[4,5,6],[7,8,9]], k = 5", "expectedOutput": "5" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Heap",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the number of distinct subsequences of a string.",
                          "example": {
                            "input": "abc",
                            "output": "7"
                          },
                          "testCase": [
                            { "input": "aaa", "expectedOutput": "3" },
                            { "input": "abab", "expectedOutput": "15" },
                            { "input": "leetcode", "expectedOutput": "63" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Dynamic Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to calculate the number of unique paths in an m x n grid.",
                          "example": {
                            "input": "m = 3, n = 7",
                            "output": "28"
                          },
                          "testCase": [
                            { "input": "m = 3, n = 2", "expectedOutput": "3" },
                            { "input": "m = 7, n = 3", "expectedOutput": "28" },
                            { "input": "m = 3, n = 3", "expectedOutput": "6" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Dynamic Programming",
                          "difficultyLevel": "hard"
                        }     
    ]
}


export const hardSet2 = {
    setDifficulty : "Hard",

    setNumber : "H2",

    time : 4 * 60 * 60 * 1000,

    questions : [
        
            {
              "questionTitle": "What is the worst-case time complexity of quicksort when the pivot is always the smallest element?",
              "options": ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
              "correctAnswer": "O(n^2)",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a Red-Black Tree, which of the following properties is NOT true?",
              "options": [
                "Every node is either red or black.",
                "The root is always red.",
                "All leaves are black.",
                "Every red node must have two black child nodes."
              ],
              "correctAnswer": "The root is always red.",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which graph algorithm is best suited to find the shortest path in a graph with negative edge weights but no negative cycles?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm"],
              "correctAnswer": "Bellman-Ford Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Graph Theory",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is used in the implementation of the LRU (Least Recently Used) cache?",
              "options": ["Queue and Hash Table", "Heap and Hash Table", "Stack and Hash Table", "Binary Tree and Hash Table"],
              "correctAnswer": "Queue and Hash Table",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In dynamic programming, which property ensures that the same subproblem is not solved multiple times?",
              "options": ["Memoization", "Greedy approach", "Recursion", "Divide and Conquer"],
              "correctAnswer": "Memoization",
              "typeOfQuestion": "mcq",
              "subject": "Dynamic Programming",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which scheduling algorithm minimizes the average waiting time for a set of processes?",
              "options": ["Round Robin", "Shortest Job First", "FCFS", "Multilevel Queue"],
              "correctAnswer": "Shortest Job First",
              "typeOfQuestion": "mcq",
              "subject": "Operating Systems",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the primary purpose of a semaphore in operating systems?",
              "options": ["Memory allocation", "Deadlock avoidance", "Process synchronization", "File handling"],
              "correctAnswer": "Process synchronization",
              "typeOfQuestion": "mcq",
              "subject": "Operating Systems",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following algorithms is NOT stable?",
              "options": ["Merge Sort", "Insertion Sort", "Bubble Sort", "Quick Sort"],
              "correctAnswer": "Quick Sort",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which hashing technique handles collisions by allowing multiple elements at the same position using a linked list?",
              "options": ["Linear probing", "Quadratic probing", "Double hashing", "Chaining"],
              "correctAnswer": "Chaining",
              "typeOfQuestion": "mcq",
              "subject": "Hashing",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the main advantage of using a trie over a hash table for storing strings?",
              "options": [
                "Faster lookup",
                "Supports prefix-based search",
                "Less memory consumption",
                "Supports constant time search"
              ],
              "correctAnswer": "Supports prefix-based search",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which traversal technique is used in Depth-First Search (DFS)?",
              "options": ["Queue", "Stack", "Heap", "Priority Queue"],
              "correctAnswer": "Stack",
              "typeOfQuestion": "mcq",
              "subject": "Graph Theory",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In AVL trees, what is the maximum height difference allowed between the left and right subtrees of any node?",
              "options": ["0", "1", "2", "3"],
              "correctAnswer": "1",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is most suitable for implementing a priority queue?",
              "options": ["Stack", "Queue", "Heap", "Linked List"],
              "correctAnswer": "Heap",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used for finding the minimum spanning tree of a graph?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Kruskal's Algorithm", "Ford-Fulkerson Algorithm"],
              "correctAnswer": "Kruskal's Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Graph Theory",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the time complexity of searching in a balanced binary search tree?",
              "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following is NOT a type of tree traversal?",
              "options": ["Inorder", "Postorder", "Reverse-order", "Preorder"],
              "correctAnswer": "Reverse-order",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a B-tree of order m, what is the maximum number of keys a node can have?",
              "options": ["m", "m-1", "2m", "2m-1"],
              "correctAnswer": "m-1",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm uses a greedy approach to solve the single-source shortest path problem?",
              "options": ["Bellman-Ford", "Dijkstra", "Kruskal", "Prim"],
              "correctAnswer": "Dijkstra",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which sorting algorithm performs the best when the input is already sorted?",
              "options": ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
              "correctAnswer": "Insertion Sort",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum number of edges in a simple undirected graph with n vertices?",
              "options": ["n-1", "n*(n-1)/2", "n*(n+1)/2", "2^n"],
              "correctAnswer": "n*(n-1)/2",
              "typeOfQuestion": "mcq",
              "subject": "Graph Theory",
              "difficultyLevel": "hard"
            },

                {
                  "questionTitle": "What is the amortized time complexity of inserting an element into a dynamic array?",
                  "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                  "correctAnswer": "O(1)",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which of the following algorithms is used for detecting a cycle in a directed graph?",
                  "options": ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "Depth-First Search"],
                  "correctAnswer": "Depth-First Search",
                  "typeOfQuestion": "mcq",
                  "subject": "Graph Theory",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In a max heap, what is the time complexity of extracting the maximum element?",
                  "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                  "correctAnswer": "O(log n)",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which of the following data structures is most suitable for implementing an undo operation?",
                  "options": ["Queue", "Stack", "Heap", "Priority Queue"],
                  "correctAnswer": "Stack",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is the space complexity of the Floyd-Warshall algorithm for finding all-pairs shortest paths in a graph with n vertices?",
                  "options": ["O(n)", "O(n^2)", "O(n^3)", "O(n log n)"],
                  "correctAnswer": "O(n^2)",
                  "typeOfQuestion": "mcq",
                  "subject": "Graph Theory",
                  "difficultyLevel": "hard"
                },

                
                    {
                      "questionTitle": "Explain the concept of persistent data structures and how they differ from ephemeral data structures. Provide examples.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the differences between AVL trees and Red-Black trees. Discuss the scenarios where each is preferable.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of the A* algorithm. How does it differ from Dijkstra's algorithm?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the concept of dynamic programming with an example of solving the Longest Increasing Subsequence problem.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of matrix chain multiplication and how dynamic programming is used to solve it.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "What are Fibonacci heaps? Explain their structure and how they provide an advantage over binary heaps.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe Tarjan's algorithm for finding strongly connected components (SCC) in a directed graph.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of trie data structure. How can it be used to implement a prefix-based search efficiently?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the KMP (Knuth-Morris-Pratt) string matching algorithm and how it improves over the naive approach.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the Bellman-Ford algorithm for single-source shortest paths and how it handles negative weight cycles.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "What is the Master Theorem in the context of divide and conquer algorithms? Provide an example where it can be applied.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the concept of backtracking and how it is used in solving the N-Queens problem.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of network flow and how the Ford-Fulkerson algorithm is used to find the maximum flow in a network.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the concept of sparse tables and how they are used for range minimum queries (RMQ).",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of topological sorting in a directed acyclic graph (DAG). How is it useful in dependency resolution?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Graph Theory",
                      "difficultyLevel": "hard"
                    },


                    
                        {
                          "questionTitle": "Write a function to find the longest palindrome substring in a given string.",
                          "example": {
                            "input": "babad",
                            "output": "bab"
                          },
                          "testCase": [
                            { "input": "cbbd", "expectedOutput": "bb" },
                            { "input": "a", "expectedOutput": "a" },
                            { "input": "abcde", "expectedOutput": "a" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to implement the wildcard pattern matching algorithm.",
                          "example": {
                            "input": { "string": "adceb", "pattern": "*a*b" },
                            "output": true
                          },
                          "testCase": [
                            { "input": { "string": "aa", "pattern": "a" }, "expectedOutput": false },
                            { "input": { "string": "aa", "pattern": "*" }, "expectedOutput": true },
                            { "input": { "string": "cb", "pattern": "?a" }, "expectedOutput": false }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to solve the N-Queens problem and return all possible solutions.",
                          "example": {
                            "input": 4,
                            "output": [[".Q..", "...Q", "Q...", "..Q."]]
                          },
                          "testCase": [
                            { "input": 1, "expectedOutput": [["Q"]] },
                            { "input": 2, "expectedOutput": [] },
                            { "input": 3, "expectedOutput": [] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the shortest path in a binary matrix using BFS.",
                          "example": {
                            "input": [[0,1],[1,0]],
                            "output": 2
                          },
                          "testCase": [
                            { "input": [[0,0,0],[1,1,0],[1,1,0]], "expectedOutput": 4 },
                            { "input": [[0,1],[1,1]], "expectedOutput": -1 },
                            { "input": [[0,0],[0,0]], "expectedOutput": 2 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to implement the KMP string matching algorithm.",
                          "example": {
                            "input": { "string": "ababcababcabc", "pattern": "ababc" },
                            "output": [0, 5]
                          },
                          "testCase": [
                            { "input": { "string": "aaaaa", "pattern": "aa" }, "expectedOutput": [0, 1, 2, 3] },
                            { "input": { "string": "abc", "pattern": "d" }, "expectedOutput": [] },
                            { "input": { "string": "abcabc", "pattern": "abc" }, "expectedOutput": [0, 3] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to implement the LRU (Least Recently Used) cache with a given capacity.",
                          "example": {
                            "input": { "capacity": 2, "operations": ["put(1,1)", "put(2,2)", "get(1)", "put(3,3)", "get(2)"] },
                            "output": [1, -1]
                          },
                          "testCase": [
                            { "input": { "capacity": 2, "operations": ["put(1,1)", "put(2,2)", "get(1)", "put(3,3)", "get(2)", "get(3)"] }, "expectedOutput": [1, -1, 3] },
                            { "input": { "capacity": 1, "operations": ["put(1,1)", "get(1)", "put(2,2)", "get(1)"] }, "expectedOutput": [1, -1] },
                            { "input": { "capacity": 3, "operations": ["put(1,1)", "put(2,2)", "put(3,3)", "get(1)", "put(4,4)", "get(2)"] }, "expectedOutput": [1, -1] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to rotate a matrix 90 degrees clockwise in place.",
                          "example": {
                            "input": [[1,2,3],[4,5,6],[7,8,9]],
                            "output": [[7,4,1],[8,5,2],[9,6,3]]
                          },
                          "testCase": [
                            { "input": [[1]], "expectedOutput": [[1]] },
                            { "input": [[1,2],[3,4]], "expectedOutput": [[3,1],[4,2]] },
                            { "input": [[1,2,3],[4,5,6],[7,8,9]], "expectedOutput": [[7,4,1],[8,5,2],[9,6,3]] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to solve the Sudoku puzzle using backtracking.",
                          "example": {
                            "input": [
                              ["5","3",".",".","7",".",".",".","."],
                              ["6",".",".","1","9","5",".",".","."],
                              [".","9","8",".",".",".",".","6","."],
                              ["8",".",".",".","6",".",".",".","3"],
                              ["4",".",".","8",".","3",".",".","1"],
                              ["7",".",".",".","2",".",".",".","6"],
                              [".","6",".",".",".",".","2","8","."],
                              [".",".",".","4","1","9",".",".","5"],
                              [".",".",".",".","8",".",".","7","9"]
                            ],
                            "output": "Solved Sudoku"
                          },
                          "testCase": [
                            { "input": [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]], "expectedOutput": "Solved Sudoku" }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the kth largest element in an array using a heap.",
                          "example": {
                            "input": { "nums": [3,2,1,5,6,4], "k": 2 },
                            "output": 5
                          },
                          "testCase": [
                            { "input": { "nums": [3,2,3,1,2,4,5,5,6], "k": 4 }, "expectedOutput": 4 },
                            { "input": { "nums": [1], "k": 1 }, "expectedOutput": 1 },
                            { "input": { "nums": [1,2,3,4,5,6], "k": 3 }, "expectedOutput": 4 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },

                        {
                            "questionTitle": "Write a function to calculate the maximum profit from at most two stock transactions.",
                            "example": {
                              "input": [3,3,5,0,0,3,1,4],
                              "output": 6
                            },
                            "testCase": [
                              { "input": [1,2,3,4,5], "expectedOutput": 4 },
                              { "input": [7,6,4,3,1], "expectedOutput": 0 },
                              { "input": [3,2,6,5,0,3], "expectedOutput": 7 }
                            ],
                            "typeOfQuestion": "coding",
                            "subject": "Programming",
                            "difficultyLevel": "hard"
                          }     
    ]
}

export const hardSet3 ={

    setDifficulty : "Hard",

    setNumber : "H3",

    time : 4 * 60 * 60 * 1000,


    questions : [
        
            {
              "questionTitle": "Which of the following is true about the NP-complete class of problems?",
              "options": ["All NP problems are solvable in polynomial time", "Every problem in NP can be reduced to any NP-complete problem in polynomial time", "NP-complete problems have exponential solutions", "NP-complete problems cannot be solved by a deterministic Turing machine"],
              "correctAnswer": "Every problem in NP can be reduced to any NP-complete problem in polynomial time",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a balanced binary tree, what is the time complexity of an insertion operation?",
              "options": ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which sorting algorithm works by repeatedly selecting the minimum element and moving it to the sorted part of the array?",
              "options": ["Merge Sort", "Heap Sort", "Selection Sort", "Quick Sort"],
              "correctAnswer": "Selection Sort",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In the context of dynamic programming, what is the main advantage over a greedy algorithm?",
              "options": ["It guarantees an optimal solution", "It requires less memory", "It is faster", "It is easier to implement"],
              "correctAnswer": "It guarantees an optimal solution",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum number of nodes at level ‘L’ in a binary tree?",
              "options": ["2^L", "L^2", "L * 2", "2^(L-1)"],
              "correctAnswer": "2^L",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is used to implement Dijkstra's shortest path algorithm efficiently?",
              "options": ["Queue", "Stack", "Heap", "Graph"],
              "correctAnswer": "Heap",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which graph traversal algorithm is more suitable for finding the shortest path in an unweighted graph?",
              "options": ["DFS", "BFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
              "correctAnswer": "BFS",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the time complexity of the best-case scenario for quicksort?",
              "options": ["O(n^2)", "O(log n)", "O(n log n)", "O(n)"],
              "correctAnswer": "O(n log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a red-black tree, which property ensures that the tree remains balanced?",
              "options": ["All nodes have two children", "Every path from a node to its descendant leaf has the same number of black nodes", "Every node is either red or black", "The left subtree has fewer nodes than the right subtree"],
              "correctAnswer": "Every path from a node to its descendant leaf has the same number of black nodes",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In Kruskal's algorithm for finding the Minimum Spanning Tree (MST), which data structure is used to detect cycles?",
              "options": ["Queue", "Heap", "Disjoint Set", "Priority Queue"],
              "correctAnswer": "Disjoint Set",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following is NOT a stable sorting algorithm?",
              "options": ["Merge Sort", "Bubble Sort", "Quick Sort", "Insertion Sort"],
              "correctAnswer": "Quick Sort",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the height of a complete binary tree with n nodes?",
              "options": ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In an AVL tree, what is the balance factor of a node?",
              "options": ["Height of left subtree - Height of right subtree", "Height of right subtree - Height of left subtree", "Number of left children - Number of right children", "Number of right children - Number of left children"],
              "correctAnswer": "Height of left subtree - Height of right subtree",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following problems is NOT typically solved using dynamic programming?",
              "options": ["Longest Increasing Subsequence", "Shortest Path", "Knapsack Problem", "Finding Prime Numbers"],
              "correctAnswer": "Finding Prime Numbers",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the space complexity of depth-first search (DFS) in a graph with V vertices and E edges?",
              "options": ["O(V)", "O(E)", "O(V + E)", "O(V * E)"],
              "correctAnswer": "O(V)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum number of edges in a directed acyclic graph with n nodes?",
              "options": ["n(n-1)/2", "n^2", "2n", "n*(n-1)"],
              "correctAnswer": "n(n-1)/2",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the best data structure to implement an LRU cache?",
              "options": ["Queue", "Stack", "Hash Map + Linked List", "Heap"],
              "correctAnswer": "Hash Map + Linked List",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },

            
                {
                  "questionTitle": "What is the maximum number of nodes in a binary tree of height h?",
                  "options": ["2^h - 1", "2^h", "h^2", "h * 2"],
                  "correctAnswer": "2^h - 1",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which algorithm is used for finding strongly connected components in a directed graph?",
                  "options": ["Kruskal's algorithm", "Prim's algorithm", "Tarjan's algorithm", "Floyd-Warshall algorithm"],
                  "correctAnswer": "Tarjan's algorithm",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In the context of hash tables, which method handles collisions by creating a linked list at each bucket?",
                  "options": ["Open addressing", "Double hashing", "Separate chaining", "Rehashing"],
                  "correctAnswer": "Separate chaining",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which of the following is true for a perfect binary tree?",
                  "options": ["All internal nodes have two children", "All leaf nodes are at the same level", "It is always balanced", "All of the above"],
                  "correctAnswer": "All of the above",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is the time complexity of Bellman-Ford algorithm for finding the shortest path?",
                  "options": ["O(V + E)", "O(V^2)", "O(VE)", "O(E log V)"],
                  "correctAnswer": "O(VE)",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "In a binary heap, what is the time complexity for inserting an element?",
                  "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                  "correctAnswer": "O(log n)",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is the main advantage of a Fibonacci heap over a binary heap?",
                  "options": ["Faster deletion", "Better memory efficiency", "Faster decrease-key operation", "Simpler implementation"],
                  "correctAnswer": "Faster decrease-key operation",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Which type of binary tree has the property that every parent node has a key greater than or equal to its child nodes?",
                  "options": ["Complete Binary Tree", "AVL Tree", "Min Heap", "Max Heap"],
                  "correctAnswer": "Max Heap",
                  "typeOfQuestion": "mcq",
                  "subject": "Data Structures & Algorithms",
                  "difficultyLevel": "hard"
                },


                
                    {
                      "questionTitle": "Explain the concept of amortized analysis in data structures with an example.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the differences between a Red-Black Tree and an AVL Tree. When would you prefer one over the other?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of KMP (Knuth-Morris-Pratt) string matching algorithm with an example.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the process of converting a directed graph into its strongly connected components using Kosaraju’s algorithm.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of path compression in the union-find data structure and how it improves time complexity.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the concept of dynamic programming and how it differs from divide and conquer. Provide an example where dynamic programming is more efficient.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of the Rabin-Karp string matching algorithm and discuss its worst-case time complexity.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of trie data structures. How are they used in prefix matching and autocomplete features?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the working of the Floyd-Warshall algorithm for finding all pairs shortest paths in a graph. What is its time complexity?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain how backtracking works in solving the N-Queens problem. Provide the recursive approach.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the concept of sparse tables and their use in range minimum queries (RMQ). Why are they efficient for static arrays?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the concept of topological sorting in a Directed Acyclic Graph (DAG). Provide an example of its application.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Discuss the differences between Prim’s and Kruskal’s algorithm for finding Minimum Spanning Tree (MST). When is each preferred?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Describe the working of the Edmonds-Karp algorithm for solving the maximum flow problem. What is its time complexity?",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Explain the working of the Boyer-Moore string matching algorithm and how it achieves sublinear time complexity in practice.",
                      "typeOfQuestion": "theoretical",
                      "subject": "Data Structures & Algorithms",
                      "difficultyLevel": "hard"
                    },

                    
                        {
                          "questionTitle": "Write a function to find the largest rectangular area in a histogram.",
                          "example": {
                            "input": [2, 1, 5, 6, 2, 3],
                            "output": 10
                          },
                          "testCase": [
                            { "input": [2, 4], "expectedOutput": 4 },
                            { "input": [6, 2, 5, 4, 5, 1, 6], "expectedOutput": 12 },
                            { "input": [2, 3, 3, 2], "expectedOutput": 6 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the shortest path in a maze using BFS.",
                          "example": {
                            "input": {
                              "maze": [[0, 1], [0, 0]],
                              "start": [0, 0],
                              "end": [1, 1]
                            },
                            "output": 2
                          },
                          "testCase": [
                            { "input": { "maze": [[0, 0, 1], [1, 0, 1], [1, 0, 0]], "start": [0, 0], "end": [2, 2] }, "expectedOutput": 4 },
                            { "input": { "maze": [[0, 1], [1, 0]], "start": [0, 0], "end": [1, 1] }, "expectedOutput": -1 },
                            { "input": { "maze": [[0]], "start": [0, 0], "end": [0, 0] }, "expectedOutput": 0 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to find the kth smallest element in a sorted matrix.",
                          "example": {
                            "input": {
                              "matrix": [[1, 5, 9], [10, 11, 13], [12, 13, 15]],
                              "k": 8
                            },
                            "output": 13
                          },
                          "testCase": [
                            { "input": { "matrix": [[1, 3, 5], [6, 7, 12], [11, 14, 14]], "k": 5 }, "expectedOutput": 7 },
                            { "input": { "matrix": [[1, 2], [3, 4]], "k": 2 }, "expectedOutput": 2 },
                            { "input": { "matrix": [[2, 3, 6], [6, 7, 8], [10, 12, 15]], "k": 4 }, "expectedOutput": 6 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to check if a given Sudoku puzzle is valid.",
                          "example": {
                            "input": [
                              ["5", "3", ".", ".", "7", ".", ".", ".", "."],
                              ["6", ".", ".", "1", "9", "5", ".", ".", "."],
                              [".", "9", "8", ".", ".", ".", ".", "6", "."]
                            ],
                            "output": true
                          },
                          "testCase": [
                            { "input": [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."]], "expectedOutput": true },
                            { "input": [["5", "3", "5", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."]], "expectedOutput": false },
                            { "input": [["1", "2", "3", "4"], ["3", "4", "1", "2"], ["4", "1", "2", "3"], ["2", "3", "4", "1"]], "expectedOutput": true }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to implement the LRU Cache.",
                          "example": {
                            "input": ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
                            "output": [null, null, null, 1, null, -1, null, -1, 3, 4]
                          },
                          "testCase": [
                            { "input": ["LRUCache", "put", "get", "put", "get", "get"], "expectedOutput": [null, null, 1, null, -1, 3] },
                            { "input": ["LRUCache", "put", "put", "get"], "expectedOutput": [null, null, 1] },
                            { "input": ["LRUCache", "put", "get", "put", "get", "put", "get"], "expectedOutput": [null, null, -1, null, 2, null, 3] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to generate all combinations of well-formed parentheses.",
                          "example": {
                            "input": 3,
                            "output": ["((()))", "(()())", "(())()", "()(())", "()()()"]
                          },
                          "testCase": [
                            { "input": 2, "expectedOutput": ["(())", "()()"] },
                            { "input": 1, "expectedOutput": ["()"] },
                            { "input": 0, "expectedOutput": [] }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to calculate the median of a data stream.",
                          "example": {
                            "input": [1, 2, 3, 4],
                            "output": 2.5
                          },
                          "testCase": [
                            { "input": [1, 2], "expectedOutput": 1.5 },
                            { "input": [2, 3, 4], "expectedOutput": 3 },
                            { "input": [5, 15, 1, 3], "expectedOutput": 4 }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },
                        {
                          "questionTitle": "Write a function to solve the 'Word Search' problem.",
                          "example": {
                            "input": {
                              "board": [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
                              "word": "ABCCED"
                            },
                            "output": true
                          },
                          "testCase": [
                            { "input": { "board": [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "word": "SEE" }, "expectedOutput": true },
                            { "input": { "board": [["A", "B"], ["C", "D"]], "word": "ABCD" }, "expectedOutput": false },
                            { "input": { "board": [["A"]], "word": "A" }, "expectedOutput": true }
                          ],
                          "typeOfQuestion": "coding",
                          "subject": "Programming",
                          "difficultyLevel": "hard"
                        },

                            {
                              "questionTitle": "Write a function to find the minimum window substring in a string that contains all the characters of another string.",
                              "example": {
                                "input": {
                                  "s": "ADOBECODEBANC",
                                  "t": "ABC"
                                },
                                "output": "BANC"
                              },
                              "testCase": [
                                { "input": { "s": "AABACBE", "t": "ABC" }, "expectedOutput": "BAC" },
                                { "input": { "s": "a", "t": "a" }, "expectedOutput": "a" },
                                { "input": { "s": "a", "t": "b" }, "expectedOutput": "" }
                              ],
                              "typeOfQuestion": "coding",
                              "subject": "Programming",
                              "difficultyLevel": "hard"
                            },
                            {
                              "questionTitle": "Write a function to solve the 'N-Queens' problem.",
                              "example": {
                                "input": 4,
                                "output": [
                                  [".Q..", "...Q", "Q...", "..Q."],
                                  ["..Q.", "Q...", "...Q", ".Q.."]
                                ]
                              },
                              "testCase": [
                                { "input": 1, "expectedOutput": [["Q"]] },
                                { "input": 2, "expectedOutput": [] },
                                { "input": 3, "expectedOutput": [] }
                              ],
                              "typeOfQuestion": "coding",
                              "subject": "Programming",
                              "difficultyLevel": "hard"
                            }      
    ]
}

export const hardSet4 = {
    setDifficulty : "Hard",

    setNumber : "H4",

    time : 4 * 60 * 60 * 1000,

    questions : [
        
            {
              "questionTitle": "Which data structure is used to implement LRU (Least Recently Used) cache efficiently?",
              "options": ["Queue", "Heap", "Stack", "Hash Map with Doubly Linked List"],
              "correctAnswer": "Hash Map with Doubly Linked List",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a binary search tree, what is the time complexity of searching for an element in the average case?",
              "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used to find the shortest path in a weighted graph with negative weights but without negative cycles?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Prim's Algorithm"],
              "correctAnswer": "Bellman-Ford Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum height of a binary tree with n nodes?",
              "options": ["n", "n-1", "log n", "n/2"],
              "correctAnswer": "n-1",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a max-heap, what is the time complexity of inserting a new element?",
              "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the worst-case time complexity of the QuickSort algorithm?",
              "options": ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
              "correctAnswer": "O(n^2)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which traversal algorithm is used to convert a binary search tree into a sorted list?",
              "options": ["Preorder", "Postorder", "Inorder", "Level-order"],
              "correctAnswer": "Inorder",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is used in implementing a priority queue?",
              "options": ["Queue", "Heap", "Stack", "Linked List"],
              "correctAnswer": "Heap",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the average-case time complexity of searching in a hash table?",
              "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
              "correctAnswer": "O(1)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used for finding the minimum spanning tree in a graph?",
              "options": ["Dijkstra's Algorithm", "Kruskal's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm"],
              "correctAnswer": "Kruskal's Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the space complexity of a BFS traversal of a graph with n vertices and e edges?",
              "options": ["O(n)", "O(e)", "O(n + e)", "O(n * e)"],
              "correctAnswer": "O(n + e)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In dynamic programming, what is used to store the results of subproblems to avoid redundant computations?",
              "options": ["Heap", "Stack", "Array", "Memoization table"],
              "correctAnswer": "Memoization table",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which graph traversal algorithm can detect cycles in a directed graph?",
              "options": ["BFS", "DFS", "Kruskal's Algorithm", "Dijkstra's Algorithm"],
              "correctAnswer": "DFS",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is used to perform backtracking efficiently?",
              "options": ["Queue", "Heap", "Stack", "Array"],
              "correctAnswer": "Stack",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a hash table, which technique is used to resolve collisions?",
              "options": ["Rehashing", "Chaining", "Probing", "All of the above"],
              "correctAnswer": "All of the above",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the worst-case time complexity of searching in an AVL tree?",
              "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum number of edges in a complete undirected graph with n vertices?",
              "options": ["n", "n(n-1)/2", "2n", "n^2"],
              "correctAnswer": "n(n-1)/2",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the main advantage of using adjacency list over adjacency matrix to represent a graph?",
              "options": ["Less memory usage", "Faster traversal", "Simpler implementation", "Easy to debug"],
              "correctAnswer": "Less memory usage",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the best data structure to implement a LIFO (Last In First Out) mechanism?",
              "options": ["Queue", "Stack", "Heap", "Deque"],
              "correctAnswer": "Stack",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In Dijkstra’s algorithm, which data structure is most suitable for storing distances of nodes?",
              "options": ["Heap", "Stack", "Queue", "Linked List"],
              "correctAnswer": "Heap",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },

            {
                "questionTitle": "What is the main disadvantage of using a singly linked list over a doubly linked list?",
                "options": ["Higher memory usage", "Cannot traverse backwards", "Slower insertion", "Complex structure"],
                "correctAnswer": "Cannot traverse backwards",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Which sorting algorithm is most efficient when the list is almost sorted?",
                "options": ["QuickSort", "MergeSort", "Insertion Sort", "Selection Sort"],
                "correctAnswer": "Insertion Sort",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "What is the time complexity of finding the median in an unsorted list using the Median of Medians algorithm?",
                "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                "correctAnswer": "O(n)",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Which data structure is used for implementing recursion internally in a programming language?",
                "options": ["Queue", "Stack", "Heap", "Linked List"],
                "correctAnswer": "Stack",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "What is the worst-case time complexity of inserting an element in a hash table using open addressing?",
                "options": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
                "correctAnswer": "O(n)",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },

              {
                "questionTitle": "Explain the working of the A* search algorithm and its applications.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Describe the concept of dynamic programming. How does it differ from memoization?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the difference between AVL trees and Red-Black trees. Provide examples where each would be preferred.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Discuss the working of the Ford-Fulkerson algorithm for finding the maximum flow in a flow network.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the principle behind the Boyer-Moore string search algorithm and its advantages over other string matching algorithms.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Describe the concept of amortized analysis. Provide an example where amortized analysis is useful.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the working of the Hopcroft-Karp algorithm for finding maximum matchings in a bipartite graph.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Discuss the working and complexity of the Edmonds-Karp algorithm. How does it improve over the Ford-Fulkerson algorithm?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the Tarjan’s algorithm for finding strongly connected components in a directed graph. Provide an example.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Discuss the working of the Blossom algorithm for finding maximum matchings in general graphs.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Describe the concept of Splay trees. How does it ensure that frequently accessed elements are accessed quickly?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the working of the Rabin-Karp algorithm for string matching. How does it use hashing to improve efficiency?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Discuss the concept of persistent data structures. How are they useful in functional programming?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Explain the concept of treaps (tree-based heaps). How does a treap combine properties of a binary search tree and a heap?",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "Discuss the complexity and applications of the Floyd-Warshall algorithm for finding shortest paths in a graph.",
                "typeOfQuestion": "theoretical",
                "subject": "Data Structures & Algorithms",
                "difficultyLevel": "hard"
              },

              
                {
                  "questionTitle": "Write a function to find the longest palindrome substring in a given string.",
                  "example": {
                    "input": "babad",
                    "output": "bab"
                  },
                  "testCase": [
                    { "input": "cbbd", "expectedOutput": "bb" },
                    { "input": "a", "expectedOutput": "a" },
                    { "input": "forgeeksskeegfor", "expectedOutput": "geeksskeeg" }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to generate all possible permutations of a given string.",
                  "example": {
                    "input": "abc",
                    "output": ["abc", "acb", "bac", "bca", "cab", "cba"]
                  },
                  "testCase": [
                    { "input": "dog", "expectedOutput": ["dog", "dgo", "odg", "ogd", "gdo", "god"] },
                    { "input": "aab", "expectedOutput": ["aab", "aba", "aab", "aba", "baa", "baa"] },
                    { "input": "xyz", "expectedOutput": ["xyz", "xzy", "yxz", "yzx", "zxy", "zyx"] }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to find the shortest path between two nodes in a weighted graph using Dijkstra's algorithm.",
                  "example": {
                    "input": {
                      "graph": [[0, 1, 4], [0, 2, 1], [1, 2, 2], [1, 3, 1], [2, 3, 5]],
                      "start": 0,
                      "end": 3
                    },
                    "output": 4
                  },
                  "testCase": [
                    { "input": { "graph": [[0, 1, 2], [1, 2, 1], [0, 2, 4]], "start": 0, "end": 2 }, "expectedOutput": 3 },
                    { "input": { "graph": [[0, 1, 2], [1, 2, 2], [2, 3, 3]], "start": 0, "end": 3 }, "expectedOutput": 7 },
                    { "input": { "graph": [[0, 1, 1], [1, 2, 1], [0, 2, 2]], "start": 0, "end": 2 }, "expectedOutput": 2 }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to count the number of unique binary search trees (BST) that can be formed with 'n' distinct nodes.",
                  "example": {
                    "input": 3,
                    "output": 5
                  },
                  "testCase": [
                    { "input": 1, "expectedOutput": 1 },
                    { "input": 2, "expectedOutput": 2 },
                    { "input": 4, "expectedOutput": 14 }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to solve the N-Queens problem and return all possible solutions.",
                  "example": {
                    "input": 4,
                    "output": [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]
                  },
                  "testCase": [
                    { "input": 1, "expectedOutput": [["Q"]] },
                    { "input": 2, "expectedOutput": [] },
                    { "input": 3, "expectedOutput": [] }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to calculate the maximum sum of a subarray of size k.",
                  "example": {
                    "input": { "array": [1, 2, 3, 4, 5], "k": 2 },
                    "output": 9
                  },
                  "testCase": [
                    { "input": { "array": [2, 3, 4, 1, 5], "k": 3 }, "expectedOutput": 9 },
                    { "input": { "array": [-1, -2, -3, -4], "k": 2 }, "expectedOutput": -3 },
                    { "input": { "array": [4, -1, 2, 1, -5, 4], "k": 2 }, "expectedOutput": 5 }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to find the largest rectangle containing only 1's in a binary matrix.",
                  "example": {
                    "input": [[1, 0, 1, 0, 0], [1, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 0, 0, 1, 0]],
                    "output": 6
                  },
                  "testCase": [
                    { "input": [[0, 1], [1, 0]], "expectedOutput": 1 },
                    { "input": [[1]], "expectedOutput": 1 },
                    { "input": [[0, 0], [0, 0]], "expectedOutput": 0 }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to find the maximum product subarray.",
                  "example": {
                    "input": [2, 3, -2, 4],
                    "output": 6
                  },
                  "testCase": [
                    { "input": [-2, 0, -1], "expectedOutput": 0 },
                    { "input": [2, -5, 3, 1, -4], "expectedOutput": 120 },
                    { "input": [-2, 3, -4], "expectedOutput": 24 }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to rotate a matrix 90 degrees clockwise.",
                  "example": {
                    "input": [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
                    "output": [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
                  },
                  "testCase": [
                    { "input": [[1]], "expectedOutput": [[1]] },
                    { "input": [[1, 2], [3, 4]], "expectedOutput": [[3, 1], [4, 2]] },
                    { "input": [[1, 2, 3], [4, 5, 6], [7, 8, 9]], "expectedOutput": [[7, 4, 1], [8, 5, 2], [9, 6, 3]] }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Write a function to merge two sorted linked lists.",
                  "example": {
                    "input": { "list1": [1, 2, 4], "list2": [1, 3, 4] },
                    "output": [1, 1, 2, 3, 4, 4]
                  },
                  "testCase": [
                    { "input": { "list1": [], "list2": [] }, "expectedOutput": [] },
                    { "input": { "list1": [2], "list2": [1] }, "expectedOutput": [1, 2] },
                    { "input": { "list1": [1, 2, 4], "list2": [1, 3, 4] }, "expectedOutput": [1, 1, 2, 3, 4, 4] }
                  ],
                  "typeOfQuestion": "coding",
                  "subject": "Programming",
                  "difficultyLevel": "hard"
                }
              
              
          
          
    ]
}


export const hardSet5 = {
    setDifficulty : "Hard",

    setNumber : "H5",

    time : 4 * 60 * 60 * 1000,

    questions : [
        
            {
              "questionTitle": "Which algorithm is used for finding strongly connected components in a directed graph?",
              "options": ["Kruskal's Algorithm", "Kosaraju's Algorithm", "Dijkstra's Algorithm", "Prim's Algorithm"],
              "correctAnswer": "Kosaraju's Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures & Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the time complexity of the KMP algorithm for string matching in the worst case?",
              "options": ["O(n^2)", "O(n)", "O(m + n)", "O(log n)"],
              "correctAnswer": "O(m + n)",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following data structures is most suitable for implementing a priority queue?",
              "options": ["Array", "Linked List", "Binary Heap", "Stack"],
              "correctAnswer": "Binary Heap",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the average-case time complexity for searching an element in a Binary Search Tree (BST)?",
              "options": ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which graph traversal technique is used to find the shortest path in an unweighted graph?",
              "options": ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "Bellman-Ford Algorithm"],
              "correctAnswer": "Breadth-First Search",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the maximum number of nodes at level 'L' in a binary tree?",
              "options": ["2^L", "2^(L-1)", "L", "2^L - 1"],
              "correctAnswer": "2^L",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure is most suitable for implementing LRU cache?",
              "options": ["Array", "Queue", "HashMap and LinkedList", "Stack"],
              "correctAnswer": "HashMap and LinkedList",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the time complexity of the Floyd-Warshall algorithm for finding shortest paths in a graph?",
              "options": ["O(V^2)", "O(V^2 * log V)", "O(V^3)", "O(E * log V)"],
              "correctAnswer": "O(V^3)",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a Red-Black Tree, what is the maximum height of the tree with 'n' nodes?",
              "options": ["2 * log n", "log n", "n", "n/2"],
              "correctAnswer": "2 * log n",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following problems can be solved using dynamic programming?",
              "options": ["Convex Hull", "Minimum Spanning Tree", "Knapsack Problem", "Binary Search"],
              "correctAnswer": "Knapsack Problem",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the space complexity of the quicksort algorithm in the average case?",
              "options": ["O(n)", "O(1)", "O(log n)", "O(n^2)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which of the following is a balanced binary search tree?",
              "options": ["BST", "AVL Tree", "Trie", "Binary Tree"],
              "correctAnswer": "AVL Tree",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a directed acyclic graph (DAG), which algorithm is used for topological sorting?",
              "options": ["BFS", "DFS", "Dijkstra's Algorithm", "Prim's Algorithm"],
              "correctAnswer": "DFS",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the best-case time complexity of the merge sort algorithm?",
              "options": ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
              "correctAnswer": "O(n log n)",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which data structure supports fast insertion and deletion at both ends?",
              "options": ["Stack", "Queue", "Deque", "Priority Queue"],
              "correctAnswer": "Deque",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the height of a complete binary tree with 'n' nodes?",
              "options": ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "Which algorithm is used to find the maximum flow in a flow network?",
              "options": ["Dijkstra's Algorithm", "Floyd-Warshall Algorithm", "Bellman-Ford Algorithm", "Ford-Fulkerson Algorithm"],
              "correctAnswer": "Ford-Fulkerson Algorithm",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "In a binary heap, what is the time complexity for finding the maximum element?",
              "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              "correctAnswer": "O(1)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the purpose of the Kruskal's algorithm?",
              "options": ["Find shortest path", "Find minimum spanning tree", "Find topological order", "Find connected components"],
              "correctAnswer": "Find minimum spanning tree",
              "typeOfQuestion": "mcq",
              "subject": "Algorithms",
              "difficultyLevel": "hard"
            },
            {
              "questionTitle": "What is the worst-case time complexity for searching in a balanced binary search tree?",
              "options": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
              "correctAnswer": "O(log n)",
              "typeOfQuestion": "mcq",
              "subject": "Data Structures",
              "difficultyLevel": "hard"
            },

            {
                "questionTitle": "What is the time complexity of the Bellman-Ford algorithm in the worst case?",
                "options": ["O(V^2)", "O(VE)", "O(E log V)", "O(V^3)"],
                "correctAnswer": "O(VE)",
                "typeOfQuestion": "mcq",
                "subject": "Algorithms",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "In a binary search tree, which traversal order results in a sorted list?",
                "options": ["Preorder", "Postorder", "Inorder", "Level Order"],
                "correctAnswer": "Inorder",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "What is the purpose of a bloom filter in data structures?",
                "options": ["To store large datasets", "To check for membership with no false negatives", "To sort data efficiently", "To compress data"],
                "correctAnswer": "To check for membership with no false negatives",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "What is the amortized time complexity for insertion in a dynamic array?",
                "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                "correctAnswer": "O(1)",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures",
                "difficultyLevel": "hard"
              },
              {
                "questionTitle": "In a hash table with chaining, what is the expected time complexity for search operation?",
                "options": ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                "correctAnswer": "O(1)",
                "typeOfQuestion": "mcq",
                "subject": "Data Structures",
                "difficultyLevel": "hard"
              },

              
                {
                  "questionTitle": "Explain the concept of dynamic programming and how it differs from divide and conquer with examples.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Describe the working principle of the KMP (Knuth-Morris-Pratt) string matching algorithm and explain how it optimizes the search process.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Discuss the limitations of the quicksort algorithm and how the choice of the pivot element affects its performance.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Explain the concept of AVL tree rotations with examples. How do they maintain the balance of the tree?",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What are Fibonacci heaps? Explain their structure and the operations that can be performed on them with time complexity.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Discuss the concept of a Trie data structure. How does it differ from a Hash Table in terms of search and insertion?",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Explain how the Boyer-Moore algorithm works for pattern matching. What makes it more efficient than naive string matching?",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Describe the working of the Ford-Fulkerson algorithm for computing the maximum flow in a flow network.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Explain the process of matrix chain multiplication using dynamic programming. Why is it considered an optimization problem?",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is Tarjan's algorithm? Explain how it is used to find strongly connected components in a graph.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Explain the concept of persistent data structures. How are they different from immutable and mutable data structures?",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is a B-Tree? Discuss the properties and how it differs from a binary search tree.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Explain the working of the Floyd-Warshall algorithm and how it is used to find the shortest path in a weighted graph.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "Discuss the concept of amortized analysis. Provide an example to illustrate how it applies to data structures.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Algorithms",
                  "difficultyLevel": "hard"
                },
                {
                  "questionTitle": "What is the Union-Find data structure? Explain how path compression and union by rank work together to optimize it.",
                  "typeOfQuestion": "theoretical",
                  "subject": "Data Structures",
                  "difficultyLevel": "hard"
                },

                
                    {
                      "questionTitle": "Write a function to find the longest palindrome substring in a given string.",
                      "example": {
                        "input": "babad",
                        "output": "bab"
                      },
                      "testCase": [
                        { "input": "cbbd", "expectedOutput": "bb" },
                        { "input": "a", "expectedOutput": "a" },
                        { "input": "abcda", "expectedOutput": "a" }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to calculate the maximum sum of non-adjacent elements in an array.",
                      "example": {
                        "input": [3, 2, 5, 10, 7],
                        "output": 15
                      },
                      "testCase": [
                        { "input": [3, 2, 7, 10], "expectedOutput": 13 },
                        { "input": [3, 2, 5, 10, 7], "expectedOutput": 15 },
                        { "input": [3, 2, 7, 8, 5, 10, 7], "expectedOutput": 22 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to find the kth largest element in an unsorted array.",
                      "example": {
                        "input": [3, 2, 1, 5, 6, 4], 
                        "output": 5
                      },
                      "testCase": [
                        { "input": [3, 2, 1, 5, 6, 4], "expectedOutput": 5 },
                        { "input": [7, 10, 4, 3, 20, 15], "expectedOutput": 15 },
                        { "input": [1, 2, 3, 4, 5, 6], "expectedOutput": 6 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to generate all possible combinations of well-formed parentheses for a given n.",
                      "example": {
                        "input": 3,
                        "output": ["((()))", "(()())", "(())()", "()(())", "()()()"]
                      },
                      "testCase": [
                        { "input": 2, "expectedOutput": ["(())", "()()"] },
                        { "input": 1, "expectedOutput": ["()"] },
                        { "input": 4, "expectedOutput": ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"] }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to calculate the minimum number of coins required to make a given amount.",
                      "example": {
                        "input": { "coins": [1, 2, 5], "amount": 11 },
                        "output": 3
                      },
                      "testCase": [
                        { "input": { "coins": [1, 2, 5], "amount": 11 }, "expectedOutput": 3 },
                        { "input": { "coins": [2], "amount": 3 }, "expectedOutput": -1 },
                        { "input": { "coins": [1], "amount": 0 }, "expectedOutput": 0 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to solve the N-Queens problem and return all possible solutions.",
                      "example": {
                        "input": 4,
                        "output": [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
                      },
                      "testCase": [
                        { "input": 4, "expectedOutput": [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] },
                        { "input": 1, "expectedOutput": [["Q"]] },
                        { "input": 5, "expectedOutput": [["Q....","..Q..","....Q",".Q...","...Q."],["Q....","...Q.",".Q...","....Q","..Q.."]] }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to find the maximum product subarray in a given array.",
                      "example": {
                        "input": [2, 3, -2, 4],
                        "output": 6
                      },
                      "testCase": [
                        { "input": [2, 3, -2, 4], "expectedOutput": 6 },
                        { "input": [-2, 0, -1], "expectedOutput": 0 },
                        { "input": [1, 0, -1, -3, 4], "expectedOutput": 12 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to find the longest increasing subsequence in a given array.",
                      "example": {
                        "input": [10, 9, 2, 5, 3, 7, 101, 18],
                        "output": 4
                      },
                      "testCase": [
                        { "input": [10, 9, 2, 5, 3, 7, 101, 18], "expectedOutput": 4 },
                        { "input": [0, 1, 0, 3, 2, 3], "expectedOutput": 4 },
                        { "input": [7, 7, 7, 7, 7, 7, 7], "expectedOutput": 1 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to calculate the number of distinct subsequences of a string.",
                      "example": {
                        "input": "rabbbit",
                        "output": 3
                      },
                      "testCase": [
                        { "input": "rabbbit", "expectedOutput": 3 },
                        { "input": "bag", "expectedOutput": 1 },
                        { "input": "aabb", "expectedOutput": 6 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    },
                    {
                      "questionTitle": "Write a function to count the number of islands in a given 2D grid map.",
                      "example": {
                        "input": [
                          ["1","1","0","0","0"],
                          ["1","1","0","0","0"],
                          ["0","0","1","0","0"],
                          ["0","0","0","1","1"]
                        ],
                        "output": 3
                      },
                      "testCase": [
                        { "input": [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]], "expectedOutput": 3 },
                        { "input": [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]], "expectedOutput": 1 },
                        { "input": [["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]], "expectedOutput": 0 }
                      ],
                      "typeOfQuestion": "coding",
                      "subject": "Programming",
                      "difficultyLevel": "hard"
                    }
                  
                  
              
              
          
          
    ]
}