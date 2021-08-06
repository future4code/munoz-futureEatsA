export const goToTelaInicial = (history) => {
    history.push('/telainicial');
};

export const goToLogin = (history) => {
    history.push('/login');
};

export const goToCadastroSignUp = (history) => {
    history.push('/cadastrosignup');
};

export const goToCadastroEndereco = (history) => {
    history.push('/cadastroendereco');
};

export const goToHome = (history) => {
    history.push('/');
};

export const goToRestaurante = (history, id) => {
    history.push(`/restaurante/${id}`)
}

export const goToCarrinho = (history) => {
    history.push('/carrinho');
};

export const goToPerfil = (history) => {
    history.push('/perfil');
};

export const goToEditarCadastro = (history) => {
    history.push('/editarperfil');
};

export const goToEditarEndereco = (history) => {
    history.push('/editarendereco');
};