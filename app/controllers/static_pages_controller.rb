class StaticPagesController < ApplicationController

  def root
    if !!params[:search]
      @result = params[:search]
      @search_gem = Gems.search @result
      @name = @search_gem.first["name"]
      @info = @search_gem.first["info"]
      @dependencies = @search_gem.first["dependencies"]["development"]
      else
        nil
      end
  end

  def favorites
  end

end
