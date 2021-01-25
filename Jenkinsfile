node {

    def remote = [:]
        remote.name = 'host'
        remote.host = '172.17.0.1'
        remote.allowAnyHosts = true
    
    stage('Remote SSH') {
        withCredentials(
            [sshUserPrivateKey(credentialsId: 'ssh',
                keyFileVariable: 'identity',
                passphraseVariable: '',
                usernameVariable: 'sshUser')]) {

            remote.user = sshUser
            remote.identityFile = identity

            writeFile file: 'deploy.sh', text: 'docker build . -t app:latest'
            sshScript remote: remote, script: "deploy.sh"
        }
    }

}