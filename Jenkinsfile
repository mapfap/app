node {

    stage('Clone') {
        checkout scm
    }
    
    stage('Deploy') {
      sh "docker build . -t app:latest app:${env.GIT_COMMIT}"
    }

}