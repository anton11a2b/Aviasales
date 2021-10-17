const errorMessage = (errorStatus) => {
	if (errorStatus === 'Failed to fetch') {
		return 'Проверьте подключение к интернету!';
	}

  if (errorStatus >= '400' && errorStatus < '500') {
    return 'Ошибка запроса, возможно данный запрос больше не обслуживается сервером.';
  }

  return null;
};

export default errorMessage;
