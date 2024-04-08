export function dataReducer(list, action) {
  switch (action.type) {
    case 'added': {
      const newData = {
        id: action.id,
        name: action.name,
      };
  
      return [...list, newData];
    }
    case 'deleted': {
      return list.filter(t => t.id !== action.id);
    }
    default: return null;
  }
}
