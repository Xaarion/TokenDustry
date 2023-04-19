<template>
    <div class="row">
            <div class="col mt-3">
                <div class="card">
                    <div class="card-header">
                        Configuration Globale
                    </div>
                    <div class="card-body"> 
                        <div class="form-row">
                            <label for="inputName">Nom</label>
                            <input type="text" class="form-control" id="inputName">
                        </div>
                        <div class="form-row">
                            <label for="inputDescription">Description</label>
                            <textarea class="form-control" id="inputDescription" rows="3"></textarea>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputTemplateID">ID du Template</label>
                                <input type="text" class="form-control" id="inputTemplateID">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputHostnameTemplate">Nom d'hôte du Template</label>
                                <input type="text" class="form-control" id="inputHostnameTemplate">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputMemory">Memoire</label>
                                <input type="text" class="form-control" id="inputMemory">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputDisksize">Taille du HDD</label>
                                <input type="text" class="form-control" id="inputDisksize">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputCore">Coeur</label>
                                <input type="text" class="form-control" id="inputCore">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputSocket">Socket</label>
                                <input type="text" class="form-control" id="inputSocket">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputLogin">Login</label>
                                <input type="text" class="form-control" id="inputLogin">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword">Mot de passe</label>
                                <input type="text" class="form-control" id="inputPassword">
                            </div>
                        </div>

                        <div class="form-row">
                            <label for="inputSSHKey">Clé SSH</label>
                            <textarea class="form-control" id="inputSSHKey" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>