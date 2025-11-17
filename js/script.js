// ==================== COURSE DATA ====================
const courses = [
    {
        id: 1,
        title: "Modern Web Design",
        category: "tech",
        description: "Master the art of creating stunning, responsive websites using HTML5, CSS3, and modern design principles.",
        icon: "🎨",
        duration: "8 weeks",
        level: "Beginner",
        students: "2,543",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        overview: "This comprehensive course takes you through the fundamentals of modern web design. You'll learn HTML5 semantic markup, CSS3 styling techniques, responsive design principles, and how to create beautiful, user-friendly interfaces. By the end of this course, you'll be able to build professional-quality websites from scratch and understand the principles that make great web design.",
        instructor: {
            name: "Sarah Johnson",
            avatar: "👩‍🎨",
            bio: "Senior Web Designer with 10+ years of experience at top tech companies"
        },
        resources: [
            "📄 HTML5 & CSS3 Cheat Sheet",
            "🎨 Design System Template",
            "💻 Starter Code Repository",
            "📚 Recommended Reading List"
        ]
    },
    {
        id: 2,
        title: "AI & Machine Learning Basics",
        category: "tech",
        description: "Dive into artificial intelligence and machine learning concepts with hands-on Python projects.",
        icon: "🤖",
        duration: "10 weeks",
        level: "Intermediate",
        students: "3,892",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        overview: "Explore the fascinating world of artificial intelligence and machine learning. This course covers fundamental ML algorithms, neural networks, deep learning basics, and practical applications. You'll work with Python libraries like TensorFlow and scikit-learn, building real-world projects including image classification, sentiment analysis, and predictive models. Perfect for those looking to enter the AI field or enhance their data science skills.",
        instructor: {
            name: "Dr. Michael Chen",
            avatar: "👨‍💼",
            bio: "AI Research Scientist and former Google ML Engineer"
        },
        resources: [
            "📄 Python for ML Quick Reference",
            "🧠 Neural Network Visualizations",
            "💾 Dataset Collection",
            "🔬 Jupyter Notebook Templates"
        ]
    },
    {
        id: 3,
        title: "Data Ethics & Privacy",
        category: "tech",
        description: "Understand the ethical implications of data usage, privacy laws, and responsible AI development.",
        icon: "🔒",
        duration: "6 weeks",
        level: "Intermediate",
        students: "1,876",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        overview: "In our data-driven world, understanding ethics and privacy is crucial. This course examines GDPR, CCPA, and other privacy regulations, explores ethical frameworks for data collection and AI development, and discusses real-world case studies. You'll learn to identify ethical dilemmas, implement privacy-preserving techniques, and develop policies that balance innovation with responsibility. Essential knowledge for anyone working with data or building AI systems.",
        instructor: {
            name: "Prof. Emily Rodriguez",
            avatar: "👩‍🏫",
            bio: "Ethics Professor and Privacy Advocate specializing in technology law"
        },
        resources: [
            "📜 GDPR Compliance Checklist",
            "⚖️ Ethical AI Framework Guide",
            "📊 Privacy Impact Assessment Template",
            "🔐 Data Protection Best Practices"
        ]
    },
    {
        id: 4,
        title: "Digital Marketing Mastery",
        category: "business",
        description: "Learn SEO, social media marketing, content strategy, and analytics to grow your online presence.",
        icon: "📱",
        duration: "7 weeks",
        level: "Beginner",
        students: "4,231",
        gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        overview: "Master the essential skills of digital marketing in today's competitive landscape. This course covers search engine optimization (SEO), social media strategy, content marketing, email campaigns, and analytics. You'll learn to create data-driven marketing strategies, optimize conversion funnels, and measure ROI. Includes hands-on projects with Google Analytics, Facebook Ads Manager, and SEO tools. Perfect for entrepreneurs, marketers, and business professionals.",
        instructor: {
            name: "Alex Thompson",
            avatar: "👨‍💻",
            bio: "Digital Marketing Strategist who scaled startups to 7-figure revenues"
        },
        resources: [
            "📈 SEO Keyword Research Tool",
            "📱 Social Media Content Calendar",
            "✉️ Email Marketing Templates",
            "📊 Analytics Dashboard Setup Guide"
        ]
    },
    {
        id: 5,
        title: "Graphic Design Fundamentals",
        category: "creative",
        description: "Explore color theory, typography, composition, and design thinking to create impactful visuals.",
        icon: "🎭",
        duration: "9 weeks",
        level: "Beginner",
        students: "3,567",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        overview: "Unlock your creative potential with this comprehensive graphic design course. Study color theory, typography principles, layout composition, and visual hierarchy. Learn industry-standard tools like Adobe Photoshop and Illustrator while developing your unique design aesthetic. Projects include logo design, poster creation, brand identity development, and digital illustrations. Whether you're a beginner or looking to refine your skills, this course provides a solid foundation in visual communication.",
        instructor: {
            name: "Maria Santos",
            avatar: "👩‍🎨",
            bio: "Award-winning Graphic Designer and Creative Director"
        },
        resources: [
            "🎨 Color Palette Generator",
            "✏️ Typography Pairing Guide",
            "🖼️ Design Inspiration Library",
            "🎯 Brand Identity Workbook"
        ]
    },
    {
        id: 6,
        title: "Business Analytics",
        category: "business",
        description: "Transform data into actionable insights using Excel, SQL, and business intelligence tools.",
        icon: "📊",
        duration: "8 weeks",
        level: "Intermediate",
        students: "2,945",
        gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        overview: "Learn to make data-driven business decisions with this practical analytics course. Master Excel advanced functions, SQL queries, data visualization, and business intelligence platforms like Tableau and Power BI. You'll analyze real business datasets, create interactive dashboards, and present insights to stakeholders. Topics include statistical analysis, forecasting, KPI tracking, and A/B testing. Ideal for business analysts, managers, and anyone looking to leverage data for strategic advantage.",
        instructor: {
            name: "David Kumar",
            avatar: "👨‍💼",
            bio: "Business Intelligence Leader with Fortune 500 consulting experience"
        },
        resources: [
            "📊 Excel Functions Cheat Sheet",
            "🗄️ SQL Query Reference Guide",
            "📈 Dashboard Design Templates",
            "📉 Statistical Analysis Toolkit"
        ]
    },
    {
        id: 7,
        title: "Creative Writing Workshop",
        category: "creative",
        description: "Develop your storytelling skills, narrative techniques, and find your unique writing voice.",
        icon: "✍️",
        duration: "6 weeks",
        level: "Beginner",
        students: "1,654",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        overview: "Discover and refine your writing voice in this interactive creative writing workshop. Explore narrative structure, character development, dialogue, setting, and point of view. Through weekly writing exercises and peer feedback sessions, you'll develop short stories, personal essays, or the beginning of a novel. Learn from published authors, study literary techniques, and build a consistent writing practice. Whether you write fiction or non-fiction, this workshop will elevate your craft.",
        instructor: {
            name: "Jennifer Blake",
            avatar: "👩‍💻",
            bio: "Published Author and Creative Writing MFA Professor"
        },
        resources: [
            "📝 Writing Prompts Collection",
            "📖 Story Structure Templates",
            "✍️ Character Development Worksheets",
            "📚 Reading List for Writers"
        ]
    },
    {
        id: 8,
        title: "Entrepreneurship Essentials",
        category: "business",
        description: "Learn how to launch, fund, and scale your startup from idea to successful business.",
        icon: "🚀",
        duration: "10 weeks",
        level: "Beginner",
        students: "5,123",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        overview: "Turn your business idea into reality with this comprehensive entrepreneurship course. Learn to validate business ideas, create business plans, develop minimum viable products (MVPs), and pitch to investors. Topics include market research, financial modeling, customer acquisition, fundraising strategies, and growth hacking. Featuring case studies from successful startups and guest lectures from venture capitalists and founders. Perfect for aspiring entrepreneurs, innovators, and anyone with a business idea.",
        instructor: {
            name: "Robert Martinez",
            avatar: "👨‍💼",
            bio: "Serial Entrepreneur and Startup Advisor with 3 successful exits"
        },
        resources: [
            "📋 Business Plan Template",
            "💰 Financial Projection Calculator",
            "🎤 Pitch Deck Framework",
            "🚀 Startup Toolkit & Resources"
        ]
    }
];

// ==================== QUIZ DATA ====================
const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        correct: 2
    },
    {
        question: "What is the correct syntax for referring to an external JavaScript file?",
        options: [
            "<script href='app.js'>",
            "<script name='app.js'>",
            "<script src='app.js'>",
            "<script file='app.js'>"
        ],
        correct: 2
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
            "<css>",
            "<style>",
            "<script>",
            "<styles>"
        ],
        correct: 1
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which JavaScript method is used to select an element by its ID?",
        options: [
            "getElement(id)",
            "getElementById()",
            "selectElementById()",
            "queryId()"
        ],
        correct: 1
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { courses, quizData };
}
