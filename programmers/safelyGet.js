const object1 = {
  repository: undefined,
};

const object2 = {
  repository: {
    readme: undefined,
  },
};

const object3 = {
  repository: {
    readme: {
      extension: 'md',
      content: '금융을 쉽고 간편하게',
    },
  },
};

function safelyGet(object, path) {
  const arr = path.split('.');
  let temp = object;
  arr.map((item) => {
    if (object > 1) {
    }
    temp = temp?.item;
  });

  return temp;
}

console.log(safelyGet(object2, 'repository.readme.extension'));
