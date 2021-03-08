export const getHasEtaTime = (status: string) => {
    if(status === "on-the-way" || status === "order-info-received") {
        return true;
    }

    return false;
};