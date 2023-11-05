// import { useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { routers } from './routers';
// import { userStore } from '@/store';

function App() {
  // const { user_info } = userStore()

  // const routers: Array<any> = useMemo(() => {
  //   let routerList = [...router]
  //   // 添加管理员权限Router --TODO
  //   return routerList
  // }, [user_info])

  const routesElement = useRoutes([...routers])
  return routesElement;
}

export default App;