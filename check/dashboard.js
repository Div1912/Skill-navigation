document.addEventListener("DOMContentLoaded", function() {
    // Placeholder for user data; could be fetched from a backend in a real scenario
    const userName = 'Divyanshu Singh';
    const enrolledCourses = ['Graphic Designing', 'Web Development'];
    const recommendedCourses = ['Data Science', 'AI & Machine Learning'];
  
    document.querySelector('.dashboard-container h1').innerText = `Welcome, ${userName}!`;
  
    const enrolledCoursesList = document.getElementById('enrolled-courses');
    enrolledCourses.forEach(course => {
      const listItem = document.createElement('li');
      listItem.textContent = course;
      enrolledCoursesList.appendChild(listItem);
    });
  
    const recommendedCoursesList = document.getElementById('recommended-courses');
    recommendedCourses.forEach(course => {
      const listItem = document.createElement('li');
      listItem.textContent = course;
      recommendedCoursesList.appendChild(listItem);
    });
  
   // Basic AI recommendation logic
   function recommendNewCourses(currentCourses) {
    const allCourses = {
      'Graphic Designing': ['Advanced Graphic Design', 'Digital Illustration'],
      'Web Development': ['React.js Advanced', 'Node.js & Express'],
      'Data Science': ['Machine Learning', 'Deep Learning'],
      'AI & Machine Learning': ['Neural Networks', 'Reinforcement Learning']
    };

    currentCourses.forEach(course => {
      if (allCourses[course]) {
        learningPathSection.push(...allCourses[course]);
      }
    });

    return learningPathSection;
  }

  const aiRecommendations = recommendNewCourses(enrolledCourses);
  aiRecommendations.forEach(course => {
    const listItem = document.createElement('li');
    listItem.textContent = course;
    recommendedCoursesList.appendChild(listItem);
  });

  const learningPathList = document.createElement('ul');
  learningPathSection.forEach(course => {
    const listItem = document.createElement('li');
    listItem.textContent = course;
    learningPathList.appendChild(listItem);
  });

  const learningPathSection = document.createElement('section');
  learningPathSection.innerHTML = `<h2>Your Learning Path</h2>`;
  learningPathSection.appendChild(learningPathList);
  document.querySelector('.dashboard-container').appendChild(learningPathSection);
});
const user = firebase.auth().currentUser;

const saveUserData = (userData) => {
  db.collection('users').doc(user.uid).set(userData)
    .then(() => {
      console.log('User data saved successfully');
    })
    .catch((error) => {
      console.error('Error saving user data:', error);
    });
};

const displayUserData = (userId) => {
  db.collection('users').doc(userId).get()
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data();
        document.querySelector('.dashboard-container h1').innerText = `Welcome, ${userData.name}!`;
        
        const enrolledCoursesList = document.getElementById('enrolled-courses');
        userData.enrolledCourses.forEach(course => {
          const listItem = document.createElement('li');
          listItem.textContent = course;
          enrolledCoursesList.appendChild(listItem);
        });
      } else {
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.error('Error getting document:', error);
    });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    displayUserData(user.uid);
  } else {
    // User is signed out
  }
});
