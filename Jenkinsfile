node {

    stage('Clone') {
        checkout scm
    }
    
    stage('Deploy') {
      sh "docker build . -t app:${env.GIT_COMMIT}"
    }

}