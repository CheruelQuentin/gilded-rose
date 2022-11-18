pipeline {
  agent any
  stages {
    stage('node version') {
      steps {
        sh 'node -v'
      }
    }

    stage('UT coverage') {
      steps {
        sh 'npm test -- --coverage'
      }
    }

  }
}