class StaticPagesController < ApplicationController

  def root
    @result = params[:search]
    if @result
      @search_gem = Gems.search @result
    else
      nil
    end
  end

  def favorites
  end

end
