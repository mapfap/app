node {

    def remote = [:]
        remote.name = 'host'
        remote.host = '172.17.0.1'
        remote.allowAnyHosts = true

    stage('Clone') {
        checkout scm
    }
    
    stage('Deploy') {
        withCredentials(
            [sshUserPrivateKey(credentialsId: 'ssh',
                keyFileVariable: 'identity',
                passphraseVariable: '',
                usernameVariable: 'sshUser')]) {

            remote.user = sshUser
            remote.identityFile = identity

            def buildDir = "/var/tmp/${env.JOB_NAME}-${env.BUILD_NUMBER}/"
            sshCommand remote: remote, command: "mkdir -p ${buildDir}"

            sh 'ls -la'

            sshPut remote: remote, from: 'index.js', into: buildDir
            sshPut remote: remote, from: 'package.json', into: buildDir
            sshPut remote: remote, from: 'package-lock.json', into: buildDir
            sshPut remote: remote, from: 'Dockerfile', into: buildDir

            sshCommand remote: remote, command: "docker build ${buildDir} -t app:latest"
        }
    }

}