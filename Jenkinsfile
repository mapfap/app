node {

	def commitHash = "$(git rev-parse HEAD | cut -c1-7})"

    stage('Clone') {
        checkout scm
    }
    
    stage('Deploy') {
      sh "docker build . -t app:latest -t app:${commitHash}"
    }

}