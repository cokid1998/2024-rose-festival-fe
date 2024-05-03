export const getRandomName = () => {
  const names = [
    "세상이 아름다운 1학년",
    "대2병 온 2학년",
    "화장실에서 점식먹는 아싸",
    "알바 3탕뛰는 휴학생",
    "불침번서는 군휴학생",
    "월차내고 놀러온 직장인",
    "마실나온 교수님",
    "과로직전 대학원생",
    "CC하고싶은 복학생",
    "연강에 지친 2학년",
    "과제에 지친 3학년",
    "에러를 마주친 컴공생",
  ];

  const seed = Math.floor(Math.random() * names.length);

  return names[seed];
};
