node {

	def commitHash

    stage('Clone') {
        checkout scm
        commitHash = sh(script: 'git rev-parse HEAD | cut -c1-7', returnStdout: true).trim()
    }
    
    stage('Deploy') {
      sh "docker build . -t app:latest -t app:${commitHash}"
    }

}