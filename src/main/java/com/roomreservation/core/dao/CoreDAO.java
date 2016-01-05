package com.roomreservation.core.dao;


import java.util.List;

public interface CoreDAO<T, ID> {

    void save(Object o);
    void delete(ID id);
    T findById(ID id);
    List<T> findByIds(ID[] id);
    List<T> findAll();

}
