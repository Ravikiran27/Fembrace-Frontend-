# Fembrace – PCOS/PCOD Detection and Awareness Platform

Fembrace is a full-stack web platform designed to assist in the early detection of PCOS/PCOD in women. It combines medical awareness, symptom-based analysis, and machine learning predictions.

## 💻 Tech Stack

- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Model Integration**: Flask

---

## 🧠 Machine Learning Models Used

- Logistic Regression  
- Support Vector Machine (SVM)  
- Gradient Boosting  
- Random Forest  
- Feedforward Neural Network (FNN)

---

## ⚙️ Optimization & Preprocessing

- **SMOTE**: For handling class imbalance  
- **Bayesian Optimization**: For hyperparameter tuning

---

## 🚀 Features

- Patient data intake and prediction
- Next period date detection via calendar module
- Interactive and responsive UI
- Secure and scalable architecture

---


## 📂 Project Structure
client/
├── public/
├── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
server/
├── controllers/
├── models/
├── routes/
├── app.js
└── .env

bash
Copy
Edit

## 🚀 Running Locally
```bash
git clone https://github.com/Piyush-1103/fembrace.git
cd fembrace

# For frontend
cd client
npm install
npm start

# For backend
cd ../server
npm install
npm start
📌 License
MIT

Made with ❤️ by Piyush Sharma and team .
