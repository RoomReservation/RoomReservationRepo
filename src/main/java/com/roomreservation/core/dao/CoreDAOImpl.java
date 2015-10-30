package com.roomreservation.core.dao;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;


public class CoreDAOImpl<T, ID extends Serializable> implements CoreDAO<T, ID> {

    protected Class<T> persistentClass;

    @Autowired
    protected SessionFactory sessionFactory;

    public CoreDAOImpl() {

        Type type = ((ParameterizedType)getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        if (type instanceof ParameterizedType) {
            type = ParameterizedType.class.cast(type).getRawType();
        }
        this.persistentClass = Class.class.cast(type);
    }

    @Override
    public void save(Object o) {

        sessionFactory.getCurrentSession().save(o);
    }

    @Override
    public void delete(ID id) {

        T object = (T) sessionFactory.getCurrentSession().load(persistentClass, id);
        sessionFactory.getCurrentSession().delete(object);
    }

    @Override
    public T findById(ID id) {

        return (T) sessionFactory.getCurrentSession().get(persistentClass, id);
    }

    @Override
    public List<T> findByIds(ID[] id) {

        Criteria crit = sessionFactory.getCurrentSession().createCriteria(persistentClass);
        crit.add(Restrictions.in("id", id));
        return crit.list();
    }

    @Override
    public List<T> findAll() {
        return sessionFactory.getCurrentSession().createCriteria(persistentClass).list();
    }

}
