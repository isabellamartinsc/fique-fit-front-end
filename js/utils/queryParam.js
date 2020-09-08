(root => {
  const queryParam = () => {
    return window.location.search
      .replace(/^\?/, "")
      .split("&")
      .reduce((params, query) => {
        const querySplitted = query.split("=");
        return { ...params, [querySplitted[0]]: querySplitted[1] };
      }, {});
  };

  root.queryParam = queryParam;
})(window);
