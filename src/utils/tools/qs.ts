/*
 * @Description: 
 * @Autor: 吴浩舟
 * @Date: 2022-07-05 16:36:51
 * @LastEditors: 吴浩舟
 * @LastEditTime: 2022-07-05 16:36:52
 */
import { parse } from 'qs';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export * from 'qs';
