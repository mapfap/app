node {

    def remote = [:]
        remote.name = 'host'
        remote.host = 'localhost'
        remote.allowAnyHosts = true
    
    stage('Remote SSH') {
        withCredentials(
            [sshUserPrivateKey(credentialsId: 'ssh',
                keyFileVariable: 'identity',
                passphraseVariable: '',
                usernameVariable: 'sshUser')]) {

            remote.user = sshUser
            remote.identityFile = identity

            sshScript remote: remote, script: "touch hello.txt"
        }
    }

}