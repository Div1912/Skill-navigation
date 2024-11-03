document.addEventListener("DOMContentLoaded", function() {
    const otpButton = document.querySelector('.otp-form button');
    otpButton.addEventListener('click', function() {
        alert('OTP has been sent to your mobile number!');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.course-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselItems[0].clientWidth + 20; // Include margin

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) return;
        carouselSlide.style.transform = 'translateX(' + (-size * ++counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transform = 'translateX(' + (-size * --counter) + 'px)';
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const courses = document.querySelectorAll('.course-item');
        courses.forEach(course => {
            if (course.textContent.toLowerCase().includes(query)) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        });
    });
});
// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7xdQ_NmD57dalDwmGOvHjeooiXvaDWqo",
    authDomain: "skillnavigator-13d12.firebaseapp.com",
    projectId: "skillnavigator-13d12D",
    storageBucket: "skillnavigator-13d12.firebasestorage.app",
    messagingSenderId: "71439730616",
    appId: "1:71439730616:web:6ae00cc9f2627152d2714d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = firebase.auth();
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('User logged in:', userCredential.user);
                })
                .catch((error) => {
                    console.error('Error logging in:', error.message);
                });
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    console.log('User signed up:', userCredential.user);
                })
                .catch((error) => {
                    console.error('Error signing up:', error.message);
                });
        });
    }
});
const courses = [
    { title: 'Graphic Designing', description: 'Learn the fundamentals of graphic design, including typography, color theory, and software tools like Adobe Photoshop and Illustrator.' },
    { title: 'Web Development', description: 'Master front-end and back-end web development technologies like HTML, CSS, JavaScript, and frameworks like React and Node.js.' },
    { title: 'Data Science', description: 'Dive into data analysis, machine learning, and statistical modeling using tools like Python, R, and SQL.' }
    // Add more courses as needed
  ];
  
  const courseList = document.querySelector('.course-list');
  
  courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');
    
    const courseTitle = document.createElement('h3');
    courseTitle.innerText = course.title;
    courseItem.appendChild(courseTitle);
    
    const courseDescription = document.createElement('p');
    courseDescription.innerText = course.description;
    courseItem.appendChild(courseDescription);
    
    courseList.appendChild(courseItem);
  });
  const course = [
    { title: 'Graphic Designing', description: 'Learn the fundamentals of graphic design, including typography, color theory, and software tools like Adobe Photoshop and Illustrator.' },
    { title: 'Web Development', description: 'Master front-end and back-end web development technologies like HTML, CSS, JavaScript, and frameworks like React and Node.js.' },
    { title: 'Data Science', description: 'Dive into data analysis, machine learning, and statistical modeling using tools like Python, R, and SQL.' }
  ];
  
  const enrolledCourses= document.querySelector('.course-list');
  
  courses.forEach(course => {
    const courseItem = document.createElement('div');
    courseItem.classList.add('course-item');
  
    const courseTitle = document.createElement('h3');
    courseTitle.innerText = course.title;
    courseItem.appendChild(courseTitle);
  
    const courseDescription = document.createElement('p');
    courseDescription.innerText = course.description;
    courseItem.appendChild(courseDescription);
  
    courseList.appendChild(courseItem);
  });
  